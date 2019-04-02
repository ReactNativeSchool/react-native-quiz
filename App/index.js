import { createStackNavigator, createAppContainer } from "react-navigation";

import Quiz from "./screens/Quiz";
import QuizIndex from "./screens/QuizIndex";

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Quizzes"
    }
  },
  Quiz: {
    screen: Quiz
  }
});

export default createAppContainer(MainStack);
