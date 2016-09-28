import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Blog from './components/Blog/Blog';
import BlogPostContainer from './containers/BlogPost/BlogPostContainer';
import BlogPostListContainer from './containers/BlogPostList/BlogPostListContainer';
import ContactContainer from './containers/Contact/ContactContainer';
import DonateContainer from './containers/Donate/DonateContainer';
import HomeContainer from './containers/Home/HomeContainer';
import JoinUsContainer from './containers/JoinUs/JoinUsContainer';
import ProjectsContainer from './containers/Projects/ProjectsContainer';

// TODO create/move to UI Service
const onChange = () => { document.body.scrollTop = document.documentElement.scrollTop = 0; };

const routes = (
  <Route path="/" component={Layout} onChange={onChange}>
    <IndexRoute component={HomeContainer} />
    <Route path="/blog" component={Blog}>
      <IndexRoute component={BlogPostListContainer} />
      <Route path="/blog/:slug" component={BlogPostContainer} />
    </Route>
    <Route path="/contact" component={ContactContainer} />
    <Route path="/donate" component={DonateContainer} />
    <Route path="/join-us" component={JoinUsContainer} />
    <Route path="/projects" component={ProjectsContainer} />
  </Route>
);

export default routes;
