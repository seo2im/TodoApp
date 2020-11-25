import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './Modules'
const store = createStore(Reducer);

import Navigator from './Navigator'

const App = () => {
  
  
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};


export default App;
