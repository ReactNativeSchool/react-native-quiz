import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.15)"
  },
  circle: {
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4136"
  },
  circleSucces: {
    backgroundColor: "#28A125"
  },
  icon: {
    width: screen.width / 3
  }
});

export const AlertOverlay = ({ correct, visible }) => {
  if (!visible) return null;

  const icon = correct
    ? require("../assets/check.png")
    : require("../assets/close.png");
  const circleStyles = correct
    ? [styles.circle, styles.circleSucces]
    : styles.circle;

  return (
    <View style={styles.overlay}>
      <View style={circleStyles}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
    </View>
  );
};
