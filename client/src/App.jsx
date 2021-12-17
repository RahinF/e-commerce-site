import Annoucement from "./components/Annoucement";
import { GlobalStyle } from "./globalStyles";
import Footer from "./components/Footer/Footer";
import Routes from "./router/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { decodeToken, getToken } from "./token";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/authentication/authentication.slice";
import { getUser } from "./redux/authentication/authentication.selector";
import { loadCart } from "./redux/cart/cart.thunk";
import { Content } from "./responsive";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    // check user in local storage
    const token = getToken("token");
    const decodedToken = decodeToken(token);

    // check if token is valid, add user to state if valid
    if (decodedToken?.exp * 1000 > Date.now()) {
      dispatch(setUser({ ...decodedToken, token }));
    }
    
  }, [dispatch]);


  useEffect(() => {
  //  if the user is logged in get the cart from the
  //  database otherwise get cart from localStorage

   if(user){
    dispatch(loadCart(user._id));

   } else {
    //  TODO: GET CART FROM LOCAL STOAGE AND STORE IN STATE
     const cart = localStorage.getItem('cart');
   }
    
  }, [dispatch, user]);

  return (
    <Router>
      <GlobalStyle />
      <Annoucement />
      <Navbar />

      <main>
        <Content>
        <Routes />
        </Content>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
