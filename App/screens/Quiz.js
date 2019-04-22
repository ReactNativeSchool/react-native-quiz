import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import TEMP_QUESTIONS from "../data/computers";
import { Button, ButtonContainer } from "../components/Button";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});

class Quiz extends React.Component {
  render() {
    const question = TEMP_QUESTIONS[0];
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>

            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => alert("todo")}
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.text}>0/3</Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default Quiz;
