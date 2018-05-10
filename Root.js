import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';


class Root extends Component {
    render(){
        
        const store = configureStore();
        return (
            <Provider store = { store }
            <App />
            </Provider>
        )
    }

}
export default Root;