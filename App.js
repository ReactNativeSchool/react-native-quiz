import React from "react";
import { AppLoading } from "expo";
import QuizNavigator from "./navigation/QuizNavigator";

import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import quizReducer from "./store/reducers/quizReducer";

const rootReducer = combineReducers({
  quiz: quizReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <QuizNavigator />
      </Provider>
    );
  }
}

export default App;
