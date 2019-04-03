import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  base: {
    color: "#fff",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  h1: {
    fontSize: 25,
    textAlign: "center"
  }
});

export const H1 = ({ children }) => (
  <Text style={[styles.base, styles.h1]}>{children}</Text>
);
