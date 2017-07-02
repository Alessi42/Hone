import React from 'react'
import {View, ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Dimensions from 'Dimensions';

const {width,height} = Dimensions.get('window');

const Score = (props) => {
  const {level, completed} = props
  return (
    <View style={styles.container}>
      <View style={styles.score}>
        <Text style={styles.text}>
           Level: {level}
        </Text>
        <Text style={styles.text}>
          Completed: {completed}
        </Text>
      </View>

      <View style={styles.bar}>
        <View style={{
            height: 8,
            backgroundColor: '#E1F5FE',
            width: width * (completed/(2+level*2))}}>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height*.75,
    justifyContent: 'space-between'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 30
  },
  score: {
    flex: 3,
    paddingLeft: 16,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  bar: {
    height: 8,
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
})

export default Score
