// import axios from "axios";

export const SET_QUIZ = "SET_QUIZ";

export const fetchQuiz = () => {
  dispatch({ type: SET_QUIZ, quiz: "demo" });
};
