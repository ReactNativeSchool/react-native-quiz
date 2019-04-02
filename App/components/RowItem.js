import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20
    // borderBottomWidth: 1
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600"
  }
});

export const RowItem = ({ name, onPress, color }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.row, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);
