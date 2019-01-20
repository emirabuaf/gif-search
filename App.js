import React from 'react';
import Home from './src/containers/Home';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

const App = () => {
  return(
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
export default App;
