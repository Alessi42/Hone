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
import StarRating from '../../../components/Main/StarRating'
import ChallengeItem from '../../../components/Main/challengeItem'
import challengesData from '../../../data/challenges.json'

class ChallengeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Difficulty</Text>
        <StarRating rating={3}/>
        { challengesList }
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 56,
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    color: '#fff'
  }
})
export default Challenges
