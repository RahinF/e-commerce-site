import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Product from "../pages/Product/Product";
import ProductList from "../pages/ProductList/ProductList";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products/:category" component={ProductList} />
      <Route path="/product/:id" component={Product} />
      <Route path="/cart" exact component={Cart} />

      <PublicRoute path="/login">
        <Login />
      </PublicRoute>

      <PublicRoute path="/register">
        <Register />
      </PublicRoute>

      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
