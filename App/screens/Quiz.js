import React from "react";
import { StyleSheet, View, StatusBar, SafeAreaView, Text } from "react-native";
import { ButtonContainer, Button } from "../components/Button";
import { AlertOverlay } from "../components/Alert";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36B1F0",
    paddingHorizontal: 20
  },
  safearea: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 100,
    paddingBottom: 10
  },
  text: {
    color: "#fff",
    letterSpacing: -0.02,
    fontWeight: "600",
    fontSize: 25,
    textAlign: "center"
  }
});

export default class App extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
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
      const nextIndex = state.activeQuestionIndex + 1;
      const correctCount = state.correctCount;

      if (nextIndex >= state.totalCount) {
        this.props.navigation.pop();
        return {};
      }

      return {
        answered: false,
        activeQuestionIndex: nextIndex,
        correctCount
      };
    });
  };

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const currentQuestion = questions[this.state.activeQuestionIndex];

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") }
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{currentQuestion.question}</Text>
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

          <Text style={styles.text}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <AlertOverlay
          visible={this.state.answered}
          correct={this.state.answerCorrect}
        />
      </View>
    );
  }
}
