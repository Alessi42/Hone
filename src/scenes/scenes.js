import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
  Schema
} from 'react-native-router-flux';
import TabIcon from '../components/TabIcon';
import Routes from '../routes/index'
import Chevron from '../components/Icons/Chevron.png'
import Workouts from '../routes/Workouts'

const createWorkouts = () => {
  return Routes.childRoutes.map((route) => {
    return <Scene key={route.path} component={route.component} title={route.title} hideNavBar={false} navigationBarStyle={styles.navBarStyle} leftButtonIcon={Chevron} leftButtonIconStyle={{
      tintColor: '#eddca9'
    }} titleStyle={styles.navTitleStyle} sceneStyle={styles.sceneStyle}/>
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
    height: 56,
    backgroundColor: '#302d2e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 16
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5
  },
  navBarStyle: {
    backgroundColor: '#231f21'
  },
  navTitleStyle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500'
  },
  sceneStyle: {
    backgroundColor: '#231f21'
  }
});
// direction="leftToRight" stops white transition flash
const scenes = Actions.create(
  <Scene key="app" tabs tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
  <Scene key="main" title={Routes.indexRoute.title} icon={TabIcon} iconName={Routes.indexRoute.iconName}>
      <Scene key={Routes.indexRoute.path} component={Routes.indexRoute.component} title={Routes.indexRoute.title} sceneStyle={styles.sceneStyle} direction="leftToRight" hideNavBar/>
      { createWorkouts() }
    </Scene>
    <Scene defaultRoute key="challenges" title={Routes.challengesRoute.title} icon={TabIcon} iconName={Routes.challengesRoute.iconName}>
      <Scene
        key={Routes.challengesRoute.title}
        title={Routes.challengesRoute.title}
        component={Routes.challengesRoute.component}
        sceneStyle={styles.sceneStyle}
        direction="leftToRight"
        hideNavBar>
      </Scene>
      <Scene
        key={Routes.challengeScreenRoute.path}
        component={Routes.challengeScreenRoute.component}
        title={Routes.challengeScreenRoute.title}
        hideNavBar={false}
        hideTabBar
        navigationBarStyle={styles.navBarStyle}
        leftButtonIcon={Chevron}
        leftButtonIconStyle={{tintColor: '#eddca9'}}
        titleStyle={styles.navTitleStyle}
        sceneStyle={styles.sceneStyle}
        >
      </Scene>
    </Scene>
    <Scene defaultRoute key={Routes.userRoute.path} component={Routes.userRoute.component} title={Routes.userRoute.title} hideNavBar icon={TabIcon} iconName={Routes.userRoute.iconName} sceneStyle={styles.sceneStyle}></Scene>
  </Scene>
)

export default scenes
