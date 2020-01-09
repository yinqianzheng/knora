import { connect } from "react-redux";
import { demoLogin } from "../../actions/session";
import SignupContent from "./signup_content";

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(demoLogin())
});

export default connect(null, mapDispatchToProps)(SignupContent);
