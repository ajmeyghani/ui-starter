import React, {useContext, useEffect} from "react";
import {ThemeContext} from "contexts/theme/theme";
import {Link} from "react-router-dom";
import {AuthContext} from "contexts/auth/auth";

function Topbar() {
  const themeCtx = useContext(ThemeContext);
  const authCtx = useContext(AuthContext);

  console.log(themeCtx.activeTheme.name);

  useEffect(() => {
    document.body.style.backgroundColor = themeCtx.activeTheme.background;
    document.body.style.color = themeCtx.activeTheme.foreground;
  });

  function authLinks() {
    return (
      <React.Fragment>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={authCtx.logout}>logout</button>
        </li>
      </React.Fragment>
    );
  }

  function login() {
    return (
      <React.Fragment>
        <li>
          <button onClick={authCtx.login}>login</button>
        </li>
      </React.Fragment>
    );
  }

  return (
    <div className="topbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        {
          authCtx.isAuth ? (authLinks()) : (login())
        }
        <li>
          <button onClick={themeCtx.toggleTheme}>Set Theme</button>
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
