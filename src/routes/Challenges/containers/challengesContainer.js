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

import moment from "moment";

import challengesData from '../../../data/challenges.json'

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state
  }

  onPress(challenge) {
    // console.log(challenge)
    Actions.challengeScreen({'title': challenge.name, 'challenge': challenge})
  }
  render() {
    var challengesList = []
    challengesData.difficulty[0].forEach(challenge => {
      challengesList.push(<ChallengeItem key={challenge.id} id={challenge.id} name={challenge.name} thumbnail={challenge.thumbnail} onPress={() => this.onPress(challenge)}/>)
    });
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Difficulty</Text>
        <StarRating rating={3}/>
        {challengesList}
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
