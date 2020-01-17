import { connect } from "react-redux";
import HeadItems from "./head_items";
import { withRouter } from "react-router-dom";
import { reloadNewQustions, reloadQustions } from "../../../actions/question";
import { selectTopic } from "../../../actions/topic";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  reloadNewQustions: () => dispatch(reloadNewQustions([0])),
  reloadQustions: () => dispatch(reloadQustions()),
  selectTopic: topic => dispatch(selectTopic(topic))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeadItems)
);
