const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MM9MrLJI1IZpHojKtWh2XHA4vCXscowLsoQc7BfsHQrurSKK35n7TvmZbyp2HbCWXmYcB8WAsdO5z9JXUzerfkf00At2tBbHg"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


// - Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/fir-1cd43/us-central1/api

//to start backend
// firebase emulators:start

//to deploy run
// firebase deploy --only functions


//http function initialized (http://127.0.0.1:5001/clone-7b0e2/us-central1/api).
