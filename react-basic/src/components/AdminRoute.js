/*
  Ini komponen PrivateRoute, tujuannya dia ngecek kalo user belum login nanti 
  redirect ke halaman login
*/

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin, isAdmin } from "utils/auth";

const AdminRoute = ({ component: Component, isNotFound, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          isAdmin() ? (
              !isNotFound ? (
                  <Component {...props} />
                  ) : (
                  <>
                      <Redirect to="/error" />
                      <Component {...props} />
                  </>
              )
          ) : (
              <>
                  <Redirect to="/pasien" />
                  <Component {...props} />
              </>
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminRoute;
