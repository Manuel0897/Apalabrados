import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import routes from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
              ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
