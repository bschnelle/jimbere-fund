import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import DonateContainer from './containers/Donate/DonateContainer';
import HomeContainer from './containers/Home/HomeContainer';
import JoinUsContainer from './containers/JoinUs/JoinUsContainer';
import ProjectsContainer from './containers/Projects/ProjectsContainer';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomeContainer} />
    <Route path="/donate" component={DonateContainer} />
    <Route path="/join-us" component={JoinUsContainer} />
    <Route path="/projects" component={ProjectsContainer} />
  </Route>
);

export default routes;
