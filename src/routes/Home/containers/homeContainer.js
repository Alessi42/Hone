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

const {width,height} = Dimensions.get('window');

class Home extends Component {
  constructor() {
    super();
    this.state = {
      level: 1,
      completed: 3,
      categories: [
        {
          key: 1,
          title: 'Arms',
          completed: 0.1,
          component: 'Arms'
        },
        {
          key: 2,
          title: 'Abs',
          completed: 0.4,
          component: 'Abs'
        },
      ]
    }
  }
  onPress(screen) {
    switch (screen) {
      case 'workouts':
        Actions.workouts();
        break;
      default:
        Actions.counter();
    }
    //Actions.counter();
  }
  incrementXP(value) {
    this.setState(previousState => {
        return { completed: previousState.completed + value };
      });
  }
  incrementLevel(value) {
    this.setState(previousState => {
        return { level: previousState.level + value };
      });
  }
  // <Image source={require('../assets/background.png')} style={styles.backgroundImage}>
  // contentContainerStyle={styles.container}
  render() {
    const createCategories = () => {
      return this.state.categories.map((category) => {
        return <TouchableOpacity key={category.key} style={styles.category} onPress={() => this.onPress('workouts')}>
          <Text style={styles.categoryText}>{category.title}</Text>
        </TouchableOpacity>
      });
    }
    return (
      <View style={{flex: 1}}>
      <ScrollView alwaysBounceHorizontal={false} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Image source={require('../assets/background.png')} style={styles.backgroundImage}>
            <Score completed={this.state.completed} level={this.state.level}/>
        </Image>
        <View style={{marginTop:8}}>
          {createCategories()}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
          </View>
           <TouchableOpacity onPress={() => this.onPress()}>
             <Text style={styles.buttonText}>
               COUNTER
             </Text>
         </TouchableOpacity>
       </View>
      </View>
    </ScrollView>
      <View style={{
          height:56,
          backgroundColor: "#fff",
          flexDirection:'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 1,
          shadowRadius: 8,
          elevation: 5
        }}>
        <Text style={{color:"steelblue"}}>Home</Text>
        <Text style={{color:"#ccc"}}>Progress</Text>
        <Text style={{color:"#ccc"}}>Jacob</Text>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    margin: 10,
    width: 102
  },
  category: {
    height: 78,
    margin: 4,
    marginTop: 0,
    borderRadius: 2,
    backgroundColor: '#fff8e1',
    paddingLeft: 8,
    justifyContent: 'center'
  },
  categoryText: {
    fontSize: 30
  }
})

export default Home
