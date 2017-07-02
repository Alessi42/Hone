import React from 'react';
import {Provider} from 'react-redux';
import {View, StatusBar, Text} from 'react-native';
import createStore from './src/store/createStore';
import Router from './src/scenes/router';

export default class App extends React.Component {
  render() {
    StatusBar.setBarStyle('light-content', true)
    return (
      <Provider store={createStore()}>
        <View style={{
          flex: 1
        }}>
          <View style={{height:25,backgroundColor:'#000'}}/>
          <Router/>
        </View>
      </Provider>
    );
  }
}
