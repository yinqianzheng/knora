import { connect } from "react-redux";
import HeadItems from "./head_items";
import { withRouter } from "react-router-dom";
import { reloadNewQustions } from "../../../actions/question";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  reloadNewQustions: () => dispatch(reloadNewQustions([0]))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeadItems)
);
