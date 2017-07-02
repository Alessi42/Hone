import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst
} from 'react-native-router-flux';
import TabIcon from '../components/TabIcon';
import Routes from '../routes/index'

import Workouts from '../routes/Workouts'

const createScenes = () => {
  return Routes.childRoutes.map((route) => {
    return <Scene
      key={route.path}
      component={route.component}
      title={route.title}
      hideNavBar={false}
      hideTabBar
    />
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarStyle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 16
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5
  }
});

console.log(Routes);
const scenes = Actions.create(
  <Scene key="app">
    <Scene key="main" tabs tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
      <Scene key="Home" initial={true} title={Routes.indexRoute.title} icon={TabIcon}>
        <Scene key={Routes.indexRoute.path} component={Routes.indexRoute.component} title={Routes.indexRoute.title} hideNavBar/>
        {createScenes()}
      </Scene>
      <Scene key={Routes.progressRoute.path} component={Routes.progressRoute.component} title={Routes.progressRoute.title} hideNavBar icon={TabIcon}></Scene>
      <Scene key={Routes.userRoute.path} component={Routes.userRoute.component} title={Routes.userRoute.title} hideNavBar icon={TabIcon}></Scene>
    </Scene>
  </Scene>
)

export default scenes
