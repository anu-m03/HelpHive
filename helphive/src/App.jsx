import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ReportForm from "./components/ReportForm";

const App = () => {
  const [isAuthenticated, setAuth] = useState(false);

  return (
    <Router>
      <Switch>
        {!isAuthenticated ? (
          <>
            <Route
              path="/"
              exact
              component={() => <HomePage setAuth={setAuth} />}
            />
            <Route
              path="/login"
              exact
              component={() => <LoginForm setAuth={setAuth} />}
            />
          </>
        ) : (
          <>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/report" exact component={ReportForm} />
            <Redirect from="/" to="/dashboard" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
