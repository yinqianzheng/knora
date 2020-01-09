import { connect } from "react-redux";
import { loginWithGoogle } from "../../actions/session";
import GoogleLogin from "./google_signin";

const mapDispatchToProps = dispatch => ({
  loginWithGoogle: idToken => dispatch(loginWithGoogle(idToken))
});

export default connect(null, mapDispatchToProps)(GoogleLogin);
