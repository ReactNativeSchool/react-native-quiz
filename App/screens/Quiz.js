import React from "react";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import { H1 } from "../components/Text";
import { ButtonContainer, Button } from "../components/Button";
import { AlertOverlay } from "../components/Alert";
import { QUESTIONS } from "../data/questions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36B1F0",
    paddingHorizontal: 20
  },
  safearea: {
    flex: 1,
    justifyContent: "space-between"
  }
});

export default class App extends React.Component {
  state = {
    correctCount: 0,
    totalCount: QUESTIONS.length,
    answered: false,
    answerCorrect: false,
    activeQuestionIndex: 0
  };

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.answerCorrect = true;
          nextState.correctCount = state.correctCount + 1;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      let nextIndex = state.activeQuestionIndex + 1;
      let correctCount = state.correctCount;

      if (nextIndex >= state.totalCount) {
        nextIndex = 0;
        correctCount = 0;
      }

      return {
        answered: false,
        activeQuestionIndex: nextIndex,
        correctCount
      };
    });
  };

  render() {
    const currentQuestion = QUESTIONS[this.state.activeQuestionIndex];
    const containerStyles = [
      styles.container,
      { backgroundColor: this.props.navigation.getParam("color") }
    ];

    return (
      <View style={containerStyles}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View />

          <View>
            <H1>{currentQuestion.question}</H1>
            <ButtonContainer>
              {currentQuestion.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          <H1>{`${this.state.correctCount}/${this.state.totalCount}`}</H1>
        </SafeAreaView>
        <AlertOverlay
          visible={this.state.answered}
          correct={this.state.answerCorrect}
        />
      </View>
    );
  }
}
