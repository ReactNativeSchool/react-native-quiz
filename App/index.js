import React from "react";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import { H1 } from "./components/Text";
import { ButtonContainer, Button } from "./components/Button";
import { AlertOverlay } from "./components/Alert";

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

const QUESTION =
  "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?";
const ANSWERS = [
  { id: "1", text: "Buttermilk", correct: true },
  { id: "2", text: "Daisy" },
  { id: "3", text: "Scout" },
  { id: "4", text: "Tulip" }
];

export default class App extends React.Component {
  state = {
    correct: 0,
    total: 10,
    answered: false,
    answerCorrect: false
  };

  answer = correct => {
    const nextState = { answered: true };

    if (correct) {
      nextState.answerCorrect = true;
    } else {
      nextState.answerCorrect = false;
    }

    this.setState(nextState, () => {
      setTimeout(() => this.nextQuestion(), 750);
    });
  };

  nextQuestion = () => {
    this.setState({ answered: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View />

          <View>
            <H1>{QUESTION}</H1>
            <ButtonContainer>
              {ANSWERS.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          <H1>{`${this.state.correct}/${this.state.total}`}</H1>
        </SafeAreaView>
        {this.state.answered && (
          <AlertOverlay correct={this.state.answerCorrect} />
        )}
      </View>
    );
  }
}
