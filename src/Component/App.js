
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import auth from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './Stateprovider';
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders'


const promise = loadStripe(
  "pk_test_51MM9MrLJI1IZpHojSWIEjkMuCYxLnu8vIFmxbEff9Z41BCUC3yULVFC8IUVgsWzYutHZeeXUzDl6zsvdsEQYWs4X00bBruajkg"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/checkout" element={<><Header/><Checkout/></>}/>
         <Route path="/" element={<><Header/><Home/></>}/>
         <Route path="/login" element={<><Login/></>}/>
          <Route path="/payment" element={<Elements stripe={promise}><Header /><Payment/></Elements>}/>
          <Route path="/orders" element={<><Header /><Orders/></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
