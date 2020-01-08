import { connect } from "react-redux";
import SessionErrors from "./errors";

const mapStateToProps = state => ({
  errors: state.errors.session
});

export default connect(mapStateToProps)(SessionErrors);
