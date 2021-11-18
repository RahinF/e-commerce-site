import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getUser } from "../redux/authentication/authentication.selector";

const PublicRoute = (props) => {
  const loggedIn = useSelector(getUser);

  if (loggedIn) return <Redirect to="/" />;

  return <Route {...props} />;
};

export default PublicRoute;
