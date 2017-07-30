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

class Challenges extends Component {
  render() {
    var challengesList = []
    challengesData.difficulty[0].forEach(challenge => {
      challengesList.push(
        <ChallengeItem key={challenge.id} id={challenge.id} name={challenge.name} thumbnail={challenge.thumbnail} />
      )
    });
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Difficulty</Text>
        <StarRating rating={3}/>
        { challengesList }
      </View>
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
