import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between",
  },
});

const initialState = {
  activeQuestionIndex: 0,
  correctCount: 0,
  totalCount: 0,
  answered: false,
  answerCorrect: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "answer":
      return {
        ...state,
        answered: true,
        correctCount: action.correct
          ? state.correctCount + 1
          : state.correctCount,
        answerCorrect: action.correct,
      };
    case "nextQuestion":
      return {
        ...state,
        answered: false,
        activeQuestionIndex: state.activeQuestionIndex + 1,
      };
    default:
      return state;
  }
};

const useQuiz = ({ onComplete, questions = [] }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const question = questions[state.activeQuestionIndex];
  const totalCount = questions.length;

  const answerQuestion = (correct) => {
    dispatch({ type: "answer", correct });
    setTimeout(() => {
      const nextIndex = state.activeQuestionIndex + 1;
      if (nextIndex >= totalCount) {
        onComplete();
      } else {
        dispatch({ type: "nextQuestion" });
      }
    }, 750);
  };

  return {
    answerQuestion,
    question,
    totalCount,
    correctCount: state.correctCount,
    answered: state.answered,
    answerCorrect: state.answerCorrect,
  };
};

export default ({ route, navigation }) => {
  const {
    question,
    answerQuestion,
    correctCount,
    totalCount,
    answerCorrect,
    answered,
  } = useQuiz({
    questions: route.params.questions,
    onComplete: () => {
      console.log("calling");
      navigation.pop();
    },
  });

  return (
    <View style={[styles.container, { backgroundColor: route.params.color }]}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <View>
          <Text style={styles.text}>{question?.question}</Text>

          <ButtonContainer>
            {question?.answers.map((answer) => (
              <Button
                key={answer.id}
                text={answer.text}
                onPress={() => answerQuestion(answer.correct)}
              />
            ))}
          </ButtonContainer>
        </View>

        <Text style={styles.text}>{`${correctCount}/${totalCount}`}</Text>
      </SafeAreaView>
      <Alert correct={answerCorrect} visible={answered} />
    </View>
  );
};
