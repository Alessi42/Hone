import React, {Component} from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux'
import Counter from '../../../components/Counter/counter'
import Score from '../../../components/Main/score'
import Category from '../../../components/Main/category'

const {width, height} = Dimensions.get('window');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          key: 1,
          title: 'Warm-ups',
          completed: 0.2,
          component: 'WarmUps'
        }, {
          key: 2,
          title: 'Cardio',
          completed: 0.2,
          component: 'Cardio'
        }, {
          key: 3,
          title: 'Legs',
          completed: 0.2,
          component: 'Legs'
        },{
          key: 4,
          title: 'Arms',
          completed: 0.6,
          component: 'Arms'
        }, {
          key: 5,
          title: 'Core',
          completed: 0.4,
          component: 'Core'
        }, {
          key: 6,
          title: 'Cool downs',
          completed: 0.7,
          component: 'CoolDowns'
        }
      ]
    }
  }
  onPress(category) {
    if (typeof category !== "undefined") {
      Actions.workouts({text: category.title});
    } else {
      Actions.progress();
    }
    // console.log("pressed");
    // switch (screen) {
    //   case 'workouts':
    //     Actions.workouts({text: 'Hello World!'});
    //     break;
    //   default:
    //     Actions.counter();
    // }
    //Actions.counter();
  }
  // <Image source={require('../assets/background.png')} style={styles.backgroundImage}>
  // contentContainerStyle={styles.container}
  render() {
    const createCategories = () => {
      return this.state.categories.map((category) => {
        return <Category key={category.key} category={category} onPress={() => this.onPress(category)}/>
      });
    }
    return (
      <ScrollView style={{
        flex: 1
      }} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{
          flex: 1
        }}>
          <Image source={require('../assets/background.png')} style={styles.backgroundImage}>
            <Score completed={this.state.completed} level={this.state.level}/>
          </Image>
          <View style={styles.container}>
            {createCategories()}
            <TouchableOpacity onPress={() => this.incrementXP(1)} style={styles.button}>
              <Text style={styles.buttonText}>
                Increment Completed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.incrementLevel(1)} style={styles.button}>
              <Text style={styles.buttonText}>
                Increment Level
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onPress()}>
              <Text style={styles.buttonText}>
                COUNTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    backgroundColor: '#616161',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'deepskyblue'
  },
  image: {
    width: 100,
    height: 100
  },
  backgroundImage: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null
  },
  button: {
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: 'rgb(233, 233, 233)',
    borderWidth: 1,
    borderColor: 'rgb(213, 213, 213)',
    margin: 10
  }
})

export default Home
