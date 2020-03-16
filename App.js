import React, { Component } from 'react';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import counter from './reducers'
import Counter from './view/counter';

const store = createStore(counter)

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}