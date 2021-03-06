import { connect } from "react-redux";
import SessionErrors from "./errors";
import {receiveErrors} from "../../actions/session"

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionErrors);
