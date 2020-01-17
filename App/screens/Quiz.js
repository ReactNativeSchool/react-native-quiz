import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { withNavigation } from "react-navigation";
import { ButtonView, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";
import _ from "lodash";
import {
  Body,
  Title,
  Container,
  Header,
  Content,
  List,
  Card,
  CardItem,
  Left,
  Right,
  Icon,
  Grid
} from "native-base";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  }
});

class Quiz extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false
  };

  answer = (correct) => {
    this.setState(
      (state) => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
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
    this.setState((state) => {
      const nextIndex = state.activeQuestionIndex + 1;
      if (nextIndex >= state.totalCount) {
        this.props.navigation.navigate({
          routeName: "Result"
        });
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const question = questions[this.state.activeQuestionIndex];
    console.log(question);
    if (!_.isEmpty(question)) {
      return (
        <Container>
          <Header>
            <Left></Left>
            <Body>
              <Title>Quiz app</Title>
            </Body>
          </Header>
          <Content>
            <Alert
              correct={this.state.answerCorrect}
              visible={this.state.answered}
            />
            <View>
              <Card>
                <CardItem>
                  <Body>
                    <Text>{question.question}</Text>
                  </Body>
                </CardItem>
              </Card>

              <ButtonContainer>
                {question.answers.map((answer) => (
                  <ButtonView
                    key={answer.id}
                    text={answer.text}
                    onPress={() => this.answer(answer.correct)}
                  />
                ))}
              </ButtonContainer>
            </View>
            <Card>
              <CardItem>
                <Text>{`${this.state.correctCount}/${this.state.totalCount}`}</Text>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    } else {
      return (
        <Container>
          <Header>
            <Left></Left>
            <Body>
              <Title>Quiz app</Title>
            </Body>
          </Header>
          <Content>
            <View>
              <Text>Result</Text>
            </View>
          </Content>
        </Container>
      );
    }
  }
}

export default withNavigation(Quiz);
