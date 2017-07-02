import React, {Component} from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { increment, doubleAsync } from '../modules/workoutReducer'

class Workouts extends Component {
  render() {
    return (
      <View style={{paddingTop:65}}>
        <Text>List {this.props.text} workouts</Text>
      </View>
      )
    }
  }

export default Workouts
