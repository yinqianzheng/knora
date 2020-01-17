import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  RECEIVE_RELOAD_QUESTIONS,
  RECEIVE_REMOVE_NQUESTIONS,
  CLEAR_QUESTIONS
} from "../actions/question";
import {
  RECEIVE_UPVOTE,
  RECEIVE_DOWNVOTE,
  RECEIVE_REMOVE_VOTE,
  RECEIVE_REMOVE_ANSWER
} from "../actions/answer";
import { shuffle } from "./newQuestionsReducer";
import { RECEIVE_WATCH, RECEIVE_REMOVE_WATCH } from "../actions/user";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return state.concat(shuffle(action.questions));
    case RECEIVE_QUESTION:
      return state.map(question =>
        question.id === action.question.id ? action.question : question
      );
    case RECEIVE_RELOAD_QUESTIONS:
      return shuffle(action.questions);
    case RECEIVE_WATCH:
      return state.map(question => {
        if (question.id === action.id) {
          question.numOfFollowers++;
        }
        return question;
      });
    case RECEIVE_REMOVE_WATCH:
      return state.map(question => {
        if (question.id === action.id) {
          question.numOfFollowers--;
        }
        return question;
      });
    case RECEIVE_REMOVE_ANSWER:
      return state.map(question => {
        if (question.answers.length > 0) {
          question.answers.forEach(element => {
            if (element.id === action.answerId) {
              question.numOfAnswers--;
            }
          });
          question.answers = question.answers.filter(
            ans => ans.id !== action.answerId
          );
        }
        return question;
      });
    case RECEIVE_REMOVE_NQUESTIONS:
      return state.filter(question => question.id !== action.id);
    case RECEIVE_UPVOTE:
      return state.map(question => {
        if (question.answers.length > 0) {
          question.answers = question.answers.map(ans => {
            if (ans.id === action.vote.vote.answer_id) {
              ans.upvotes = action.vote.count + ans.upvotes;
            }
            return ans;
          });
        }
        return question;
      });
    case RECEIVE_DOWNVOTE:
      return state.map(question => {
        if (question.answers.length > 0) {
          question.answers = question.answers.map(ans => {
            if (ans.id === action.vote.vote.answer_id) {
              ans.upvotes -= action.vote.count;
            }
            return ans;
          });
        }
        return question;
      });
    case RECEIVE_REMOVE_VOTE:
      return state.map(question => {
        if (question.answers.length > 0) {
          question.answers = question.answers.map(ans => {
            if (ans.id === action.vote.vote.answer_id) {
              if (action.vote.action === "REMOVE_VOTE") {
                ans.upvotes -= action.vote.count;
              } else {
                ans.upvotes += action.vote.count;
              }
            }
            return ans;
          });
        }
        return question;
      });
    case CLEAR_QUESTIONS:
      return [];
    default:
      return state;
  }
};
