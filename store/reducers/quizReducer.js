import { SET_QUIZ } from "../actions/quizAction";
import spaceQuestions from "../../App/data/space";
import westernsQuestions from "../../App/data/westerns";
import computerQuestions from "../../App/data/computers";
var quiz = [
  {
    title: "Space",
    questions: spaceQuestions,
    color: "#36b1f0"
  },
  {
    title: "Westerns",
    questions: westernsQuestions,
    color: "#799496"
  },
  {
    title: "Computers",
    questions: computerQuestions,
    color: "#49475B"
  }
];
const quizReducer = (state = quiz, action) => {
  switch (action.type) {
    case SET_QUIZ:
      return action.quiz;
  }
  return state;
};

export default quizReducer;
