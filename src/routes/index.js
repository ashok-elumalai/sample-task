import * as React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "../Component/Login";
import DashBoard from "../Component/DashBoard";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  return true;
};
export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path={"/"} render={(props) => <Login {...props} />} />
    <AuthRoute path={"/DashBoard"} component={DashBoard} />
    {/* <Route component={PageNotFound} /> */}
  </Switch>
);
export default Routes;
