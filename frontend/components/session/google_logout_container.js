import { connect } from "react-redux";
import { logout } from "../../actions/session";
import GoogleLogout from "./google_logout";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLogoutSuccess: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogout);
