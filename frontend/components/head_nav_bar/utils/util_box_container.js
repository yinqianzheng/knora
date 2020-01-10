import { connect } from "react-redux";
import UtilBox from "./util_box";


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UtilBox);
