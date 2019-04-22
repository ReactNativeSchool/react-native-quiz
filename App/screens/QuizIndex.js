import React from "react";
import { View, Button, StatusBar } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <StatusBar barStyle="dark-content" />
    <Button
      title="Go to next screen"
      onPress={() => navigation.navigate("Quiz")}
    />
  </View>
);
