
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import auth from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './Stateprovider';

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
      </Routes>
    </div>
    </Router>
  );
}

export default App;
