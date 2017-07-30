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
          component: 'WarmUps',
          icon: require('../assets/heart.png')
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
        }, {
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
    Actions.workouts({title: category.title.toUpperCase()})
    console.log('stuff')
    if (typeof category !== "undefined") {
      Actions.workouts({title: category.title.toUpperCase()});
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
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/TextLogo.png')} />
        </View>
        <View style={styles.recentWorkouts}>

        </View>
        {createCategories()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 56,
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
  logoContainer: {
    alignItems: 'center',
    padding: 16
  },
  logo: {
    height: 72,
    width: 180,
  },
  recentWorkouts: {
    flex: 1
  }
})

export default Home
