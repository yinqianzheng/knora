import { connect } from "react-redux";
import UserIcon from "./user_icon";
import { logout } from "../../../actions/session";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    alert("Click on user icon will log out the user for now");
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);
