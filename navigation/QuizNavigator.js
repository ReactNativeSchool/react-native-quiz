import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import QuizIndex from "../App/screens/QuizIndex";
import Quiz from "../App/screens/Quiz";
import Result from "../App/screens/Result";

SafeAreaView.setStatusBarHeight(0);

const UnloggedDrawer = createDrawerNavigator(
  {
    QuizIndex: {
      screen: QuizIndex,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: () => <FontAwesome name="home" size={20} color="green" />
      }
    }
  },
  {
    contentComponent: (props) => (
      <View>
        <View
          style={{
            height: 180,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black"
          }}
        >
          <Image
            style={{ width: 150, height: 150, justifyContent: "center" }}
            source={require("../assets/logo190-190.png")}
          />
        </View>
        <ScrollView>
          <DrawerItems {...props} />
        </ScrollView>
        <Text
          style={{
            padding: 20,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          www.employmentnewsinindia.com
        </Text>
      </View>
    )
  },
  {
    drawerWidth: 250
  }
);

const MainStack = createStackNavigator(
  {
    UnloggedDrawer: { screen: UnloggedDrawer },
    Quiz: Quiz,
    Result: Result
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(MainStack);
