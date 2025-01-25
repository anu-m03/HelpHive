import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";



const App = () => {
  const [isAuthenticated, setAuth] = useState(false);

  return (
    <Router>
      <Switch>
        {!isAuthenticated ? (
          <>
            <Route path="/login" component={() => <LoginForm setAuth={setAuth} />} />
            <Route path="/register" component={RegisterForm} />
          </>
        ) : (
          <>
            <Route path="/" component={HomePage} exact />
            <Route path="/dashboard" component={Dashboard} />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
