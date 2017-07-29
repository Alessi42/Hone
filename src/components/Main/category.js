import React from 'react'
import {View, ScrollView, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');


const Category = (props) => {
  const {category, scene} = props
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{category.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    margin: 1,
    marginTop: 0,
    backgroundColor: '#424242',
    paddingLeft: 8,
    justifyContent: 'center',
  },
  text: {
    fontFamily: (Platform.OS === 'ios') ? 'Arial': 'Roboto',
    fontWeight: '300',
    fontSize: 20,
    color: '#EEE',
  }
})

export default Category
