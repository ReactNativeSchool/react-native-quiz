import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <ScrollView style={{ flex: 1 }}>
      <RowItem
        name="Space"
        color="#36B1F0"
        onPress={() => navigation.navigate("Quiz", { color: "#36B1F0" })}
      />
      <RowItem
        name="Westerns"
        color="#799496"
        onPress={() => navigation.navigate("Quiz", { color: "#799496" })}
      />
      <RowItem
        name="Computers"
        color="#49475B"
        onPress={() => navigation.navigate("Quiz", { color: "#49475B" })}
      />
    </ScrollView>
  </View>
);
