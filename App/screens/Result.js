import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { withNavigation } from "react-navigation";
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

const Result = () => {
  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>Result</Title>
        </Body>
      </Header>
      <Content>
        <View>
          <Text>Result</Text>
        </View>
      </Content>
    </Container>
  );
};
export default withNavigation(Result);
