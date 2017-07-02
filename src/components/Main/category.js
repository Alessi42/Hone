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
    height: 78,
    margin: 1,
    marginTop: 0,
    backgroundColor: '#FAFAFA',
    paddingLeft: 8,
    justifyContent: 'center',
    shadowColor: '#607D8B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1
  },
  text: {
    fontFamily: (Platform.OS === 'ios') ? 'Arial': 'Roboto',
    fontWeight: '500',
    fontSize: 30
  }
})

export default Category
