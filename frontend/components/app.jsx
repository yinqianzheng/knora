import NavBarContainer from "./head_nav_bar/main_nav_bar_container";
import FeedContainer from "./home/feed/main_feed_container";
import NewQestions from "./home/question/new_questions_container";
import LoginPageContainer from "./session/login_page_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";
import QuestionDetails from "./home/question/details_container";
import SessionErrors from "./session/errors_container";

import React from "react";
import { Switch, Redirect } from "react-router-dom";

export default () => (
  <div>
    <SessionErrors />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Switch>
      <ProtectedRoute exact path="/feed" component={FeedContainer} />
      <ProtectedRoute exact path="/answer" component={NewQestions} />
      <ProtectedRoute exact path="/answer_later" component={NewQestions} />
      <ProtectedRoute
        exact
        path="/question_details/:question_id"
        component={QuestionDetails}
      />
      <AuthRoute exact path="/" component={LoginPageContainer} />
      <Redirect to="/feed" />
    </Switch>
  </div>
);
