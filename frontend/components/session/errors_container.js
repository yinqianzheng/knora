import { connect } from "react-redux";
import SessionErrors from "./errors";

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SessionErrors);
