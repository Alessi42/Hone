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

const createWorkouts = () => {
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
    backgroundColor: '#302d2e',
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

const scenes = Actions.create(
  <Scene key="app" tabs tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
    <Scene key="main" initial={true} title={Routes.indexRoute.title} icon={TabIcon} iconName={Routes.indexRoute.iconName}>
      <Scene key={Routes.indexRoute.path} component={Routes.indexRoute.component} title={Routes.indexRoute.title} hideNavBar/>
      {createWorkouts()}
    </Scene>
    <Scene key={Routes.challengesRoute.path} component={Routes.challengesRoute.component} title={Routes.challengesRoute.title} hideNavBar icon={TabIcon} iconName={Routes.challengesRoute.iconName} ></Scene>
    <Scene key={Routes.userRoute.path} component={Routes.userRoute.component} title={Routes.userRoute.title} hideNavBar icon={TabIcon} iconName={Routes.userRoute.iconName}></Scene>
  </Scene>
)

export default scenes
