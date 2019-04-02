import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    paddingVertical: 15,
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
})

export const Button = ({ text, onPress = () => {} }) => (
  <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.5}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => <View style={styles.buttonContainer}>{children}</View>
