import React from 'react';
import { IndexRoute, Route } from 'react-router';
import LayoutContainer from './containers/Layout/LayoutContainer';
import BlogContainer from './containers/Blog/BlogContainer';
import BlogPostContainer from './containers/BlogPost/BlogPostContainer';
import BlogPostListContainer from './containers/BlogPostList/BlogPostListContainer';
import ContactContainer from './containers/Contact/ContactContainer';
import DonateContainer from './containers/Donate/DonateContainer';
import HomeContainer from './containers/Home/HomeContainer';
import JoinUsContainer from './containers/JoinUs/JoinUsContainer';
import ProjectsContainer from './containers/Projects/ProjectsContainer';
import SignUpContainer from './containers/SignUp/SignUpContainer';
import TeamContainer from './containers/Team/TeamContainer';

// TODO create/move to UI Service
const onChange = () => { document.body.scrollTop = document.documentElement.scrollTop = 0; };

const routes = (
  <Route path="/" component={LayoutContainer} onChange={onChange}>
    <IndexRoute component={HomeContainer} />
    <Route path="/blog" component={BlogContainer}>
      <IndexRoute component={BlogPostListContainer} />
      <Route path="/blog/:slug" component={BlogPostContainer} />
    </Route>
    <Route path="/contact" component={ContactContainer} />
    <Route path="/donate" component={DonateContainer} />
    <Route path="/join-us" component={JoinUsContainer} />
    <Route path="/projects" component={ProjectsContainer} />
    <Route path="/sign-up" components={{ simple: SignUpContainer }} />
    <Route path="/team" component={TeamContainer} />
  </Route>
);

export default routes;
