import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="QuizIndex"
        component={QuizIndex}
        options={{
          headerTitle: "Quizzes",
        }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={({ route }) => ({
          headerTitle: route.params.title,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: route.params.color,
          },
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
