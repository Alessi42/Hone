import React from 'react'
import {Actions, Scene} from 'react-native-router-flux'
import Routes from '../routes/index'

console.log("Routes", Routes);

const createScenes = () => {
  return Routes.childRoutes.map((route) => {
    return <Scene
      key={route.path}
      component={route.component}
      title={route.title}
      hideNavBar={false}
    />
  });
}

console.log(Routes);
const scenes = Actions.create(
  <Scene key="app">
    <Scene
      key={Routes.indexRoute.path}
      component={Routes.indexRoute.component}
      title={Routes.indexRoute.title}
      hideNavBar={true}
    />
    {createScenes()}
  </Scene>
)

export default scenes
