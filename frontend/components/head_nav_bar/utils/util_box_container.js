import { connect } from "react-redux";
import UtilBox from "./util_box";
import { logout } from "../../../actions/session";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UtilBox);
