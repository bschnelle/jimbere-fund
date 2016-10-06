import React from 'react';
import { IndexRoute, Route } from 'react-router';
import LayoutCont from './containers/Layout/LayoutContainer';
import BlogCont from './containers/Blog/BlogContainer';
import BlogPostCont from './containers/BlogPost/BlogPostContainer';
import BlogPostListCont from './containers/BlogPostList/BlogPostListContainer';
import ContactCont from './containers/Contact/ContactContainer';
import DonateCont from './containers/Donate/DonateContainer';
import HomeCont from './containers/Home/HomeContainer';
import GetInvolvedCont from './containers/GetInvolved/GetInvolvedContainer';
import ProjectsCont from './containers/Projects/ProjectsContainer';
import SignUpCont from './containers/SignUp/SignUpContainer';
import TeamCont from './containers/Team/TeamContainer';

// TODO create/move to UI Service
const onChange = () => { document.body.scrollTop = document.documentElement.scrollTop = 0; };

const routes = (
  <Route path="/" component={LayoutCont} onChange={onChange}>
    <IndexRoute component={HomeCont} />
    <Route path="/blog" component={BlogCont}>
      <IndexRoute component={BlogPostListCont} />
      <Route path="/blog/:slug" component={BlogPostCont} />
    </Route>
    <Route path="/contact" component={ContactCont} />
    <Route path="/donate" component={DonateCont} />
    <Route path="/get-involved" component={GetInvolvedCont} />
    <Route path="/projects" component={ProjectsCont} />
    <Route path="/sign-up" components={{ simple: SignUpCont }} />
    <Route path="/team" component={TeamCont} />
  </Route>
);

export default routes;
