import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import Signup from "./signup";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  showGoogleSigninBtn: ownProps.showGoogleSigninBtn
});

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
