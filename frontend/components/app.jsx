import NavBarContainer from "./nav_bar/nav_bar_container";
import FeedContainer from "./home/feed_container";
import LoginPageContainer from "./session/login_page_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";

import React from "react";

export default () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <AuthRoute path="/login" component={LoginPageContainer} />
    <ProtectedRoute path="/feed" component={FeedContainer} />
  </div>
);
