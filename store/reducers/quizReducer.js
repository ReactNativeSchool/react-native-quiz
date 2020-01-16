import { SET_QUIZ } from "../actions/quizAction";
const quizReducer = (state = [], action) => {
  switch (action.type) {
    case SET_JOB:
      return action.job;
  }
  return state;
};

export default quizReducer;
