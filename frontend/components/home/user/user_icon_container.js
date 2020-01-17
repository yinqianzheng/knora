import { connect } from "react-redux";
import UserIcon from "./user_icon";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  // logout: () => {
  //   alert("Click on user icon will log out the user for now");
  //   dispatch(logout());
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);
