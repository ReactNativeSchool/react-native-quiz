import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  Body,
  Title,
  Button,
  Container,
  Header,
  Content,
  List,
  Card,
  CardItem,
  Left,
  Right,
  Text,
  Icon,
  Grid
} from "native-base";

export const ButtonView = ({ text, onPress = () => {} }) => (
  <Card>
    <CardItem>
      <Button success onPress={onPress} full>
        <Text>{text}</Text>
      </Button>
    </CardItem>
  </Card>
);

export const ButtonContainer = ({ children }) => <View>{children}</View>;
