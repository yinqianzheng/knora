import { connect } from "react-redux";
import SearchBar from "./searchbar";
import { search, clearSearch } from "../../../actions/search";
import { loadQustion } from "../../../actions/question";

const mapStateToProps = state => ({
  results: state.entities.searchResult
});

const mapDispatchToProps = dispatch => ({
  search: keyword => dispatch(search(keyword)),
  clearSearch: () => dispatch(clearSearch()),
  loadQuestion: id => dispatch(loadQustion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
