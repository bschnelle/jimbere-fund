import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import DonateContainer from './containers/Donate/DonateContainer';
import HomeContainer from './containers/Home/HomeContainer';
import JoinUsContainer from './containers/JoinUs/JoinUsContainer';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomeContainer} />
    <Route path="/donate" component={DonateContainer} />
    <Route path="/join-us" component={JoinUsContainer} />
  </Route>
);

export default routes;
