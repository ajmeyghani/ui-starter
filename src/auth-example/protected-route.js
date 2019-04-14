import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "contexts/auth/auth";

const ProtectedRoute = ({component: Component, ...rest}) => {
  const authCtx = useContext(AuthContext);
  return (
    <Route
      render={props =>
        authCtx.isAuth ?
          <Component {...props} /> :
          <Redirect to="/about" />
        }
        {...rest}
    />
  );
};

export default ProtectedRoute;
