import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() => navigation.navigate("Quiz")}
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() => navigation.navigate("Quiz")}
    />
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() => navigation.navigate("Quiz")}
    />
  </ScrollView>
);
