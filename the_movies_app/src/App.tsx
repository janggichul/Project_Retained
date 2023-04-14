import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Error from './components/Error';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
      <Route path="*" component={Error} />
      <Route path="/" component={HomePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/">
        <Redirect to="/" />
      </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
