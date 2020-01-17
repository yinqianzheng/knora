import { connect } from "react-redux";
import UtilBox from "./util_box";
import { logout } from "../../../actions/session";
import {getTopics} from "../../../actions/topic"

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchTopics: ()=> dispatch(getTopics())
});

export default connect(mapStateToProps, mapDispatchToProps)(UtilBox);
