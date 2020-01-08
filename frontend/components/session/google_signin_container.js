import { connect } from "react-redux";
import { receiveCurrentUser } from "../../actions/session";
import GoogleLogin from "./google_signin";

const mapDispatchToProps = dispatch => ({
  dispatchCurrentUser: user => dispatch(receiveCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(GoogleLogin);
