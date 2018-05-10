import React, { Component } from "react";
import { StyleSheet, View ,Text} from "react-native";
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import Dashboard from './Dashboard';

const store = configureStore();


//import configureStore from './src/store/configureStore';




//const store = configureStore();

class App extends Component {

  render() {
    
    return (

      <Provider store={store}>
          <Dashboard />
      </Provider>
      
    );
  }
}

export default App;
