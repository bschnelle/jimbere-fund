import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import HomeContainer from './containers/Home/HomeContainer';
import JoinUsContainer from './containers/JoinUs/JoinUsContainer';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomeContainer} />
    <Route path="/join-us" component={JoinUsContainer} />
  </Route>
);

export default routes;
