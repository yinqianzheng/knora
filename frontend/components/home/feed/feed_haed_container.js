import { connect } from "react-redux";
import FeedHead from "./feed_head";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FeedHead);
