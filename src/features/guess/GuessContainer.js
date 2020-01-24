import { connect } from "react-redux";
import { guessWord } from "./actions";
import Guess from "./Guess";

const mapState = ({ success }) => ({ success });
const actionCreators = { guessWord };
export default connect(mapState, actionCreators)(Guess);
