import { createStackNavigator, createAppContainer } from "react-navigation";

import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";

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
