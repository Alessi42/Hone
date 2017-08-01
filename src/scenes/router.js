import React, {Element} from 'react'
import {Router} from 'react-native-router-flux'
import scenes from './scenes'

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#231f21',
})
// getSceneStyle={getSceneStyle}/>
export default() : Element => (
    <Router
      scenes={scenes}
      getSceneStyle={getSceneStyle}
      navigationBarStyle={{borderBottomColor: 'transparent', borderBottomWidth: 65 }}
    />
)
