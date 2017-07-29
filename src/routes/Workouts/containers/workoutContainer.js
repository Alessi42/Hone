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
import {increment, doubleAsync} from '../modules/workoutReducer'

class Workouts extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>List {this.props.title} workouts</Text>
      </ScrollView>
    )
  }
}
const styles = {
  container: {
    paddingTop: 64,
  }
}
export default Workouts
