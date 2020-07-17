import React, {Component} from 'react';
import MainApp from './navigators';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './store';
const {store, persistor} = configureStore;
import {Root} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <MainApp />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
