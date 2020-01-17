import React from "react";
import { Platform, StatusBar, FlatList, StyleSheet } from "react-native";
import {
  Body,
  Title,
  Button,
  Container,
  Header,
  Content,
  List,
  Card,
  Left,
  Right,
  Text,
  Icon,
  Grid
} from "native-base";
import { useSelector, useDispatch } from "react-redux";

import { RowItem } from "../components/RowItem";
import { withNavigation } from "react-navigation";

const QuizList = ({ props, navigation }) => {
  var fav = useSelector((state) => state.quiz);
  console.log(fav);
  const renderItem = ({ item }) => {
    return (
      <RowItem
        name={item.title}
        color={item.color}
        onPress={() =>
          navigation.navigate("Quiz", {
            title: item.title,
            questions: item.questions,
            color: item.color
          })
        }
      />
    );
  };

  return (
    <Container style={styles.container}>
      <Header>
        <Left>
          <Button onPress={() => navigation.toggleDrawer()} transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Quiz app</Title>
        </Body>
      </Header>
      <Content>
        <FlatList
          data={fav}
          renderItem={renderItem}
          keyExtractor={({ title }, index) => title.toString()}
          // extraData={{ navigation: navigation }}
        />
      </Content>
    </Container>
  );
};

QuizList.navigationOptions = (navData) => {
  return {
    header: null
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default withNavigation(QuizList);
