import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Sidebar from "sidebar/sidebar";
import Topbar from "topbar/topbar";
import {ThemeProvider, themes} from "contexts/theme/theme";
import Dashboard from "dashboard/dashboard";
import ProtectedRoute from "protected-route";
import {AuthProvider} from "contexts/auth/auth";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={themes.light}>
          <div className="app">
            <Topbar></Topbar>
            <div className="content">
              <Sidebar></Sidebar>
              <section className="main">
                <Switch>
                  <Route path="/" exact component={Index} />
                  <Route path="/about/" component={About} />
                  <ProtectedRoute path="/dashboard" component={Dashboard} />
                </Switch>
              </section>
            </div>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
