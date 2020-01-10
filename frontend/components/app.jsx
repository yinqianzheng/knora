import NavBarContainer from "./head_nav_bar/main_nav_bar_container";
import FeedContainer from "./home/feed/main_feed_container";
import NewQestions from "./home/question/main_feed_content_container";
import LoginPageContainer from "./session/login_page_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";

import React from "react";

export default () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <AuthRoute path="/" component={LoginPageContainer} />
    <ProtectedRoute path="/feed" component={FeedContainer} />
    <ProtectedRoute path="/answer" component={NewQestions} />
    <ProtectedRoute path="/answer_later" component={NewQestions} />
  </div>
);
