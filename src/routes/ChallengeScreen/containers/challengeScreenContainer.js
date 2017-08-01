import React, {Component} from 'react'
import {View, ScrollView, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import AnimatedCircularTimer from '../../../components/Main/animatedCircularTimer'
import CircularTimer from '../../../components/Main/circularTimer'
import TimerMixin from 'react-timer-mixin';

const period = 60000

class ChallengeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: [],
      fill: 0
    }
    this.handleStartPress = this.handleStartPress.bind(this);
  }

  handleStartPress() {
    if (this.state.running) {
      clearInterval(TimerMixin.interval);
      this.setState({running: false, fill: 0});
      return;
    }

    this.setState({startTime: new Date(), laps: [], fill: 0});

    TimerMixin.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        fill: (100 * (this.state.timeElapsed % period)) / period,
        running: true
      });
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(TimerMixin.interval);
  }
  render() {
    console.log(this.props.challenge.exercises)
    const exercises = () => {
      return this.props.challenge.exercises.map((exercise, index) => {
        return <Text style={styles.exerciseText} key={index}>{exercise.amount} {exercise.name}</Text>
      });
    }
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image style={styles.graph} source={require('../../../components/Icons/Video.png')}/>
          <ScrollView>
            {exercises()}
          </ScrollView>
          <Image style={styles.graph} source={require('../../../components/Icons/Graph.png')}/>
        </View>
        <AnimatedCircularTimer running={this.state.running} timeElapsed={this.state.timeElapsed} fill={this.state.fill} size={250} width={5}/>
        <TouchableOpacity onPress={this.handleStartPress}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingBottom: 56,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    color: '#fff'
  },
  topContainer: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
  },
  exerciseText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  graph: {
    height: 40,
    width: 40,
    tintColor: '#fff'
  }
})
export default ChallengeScreen
