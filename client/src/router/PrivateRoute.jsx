import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getUser } from "../redux/authentication/authentication.selector";

const PrivateRoute = (props) => {
  const loggedIn = useSelector(getUser);

  if (!loggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};

export default PrivateRoute;
