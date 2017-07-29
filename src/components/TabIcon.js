import React, {
  PropTypes,
} from 'react';
import {
  Text, View, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

console.log(Icon);
var icons = {
  Workouts: require("../components/Icons/Workouts_s.png"),
  Challenges: require("../components/Icons/Challenges_s.png"),
  Profile: require("../components/Icons/Profile_s.png"),
}
const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};
var src = './Icons/challenges.png'
const TabIcon = (props) => (
  <View style={styles.tab}>
    {props.iconName? <Image style={[styles.icon, {tintColor: props.selected ? '#ecdca9':'#a1a0a1'}]} resizeMode={Image.resizeMode.resize} source={icons[props.iconName]}/> : null}
    <Text style={{ color: props.selected ? '#ecdca9' : '#a1a0a1' }}>
      {props.title}
    </Text>
  </View>
);

const styles = {
  tab: {
    alignItems:'center',
    backgroundColor: '#302d2e',
  },
  icon: {
    height:25,
    width:25,
  }
}
TabIcon.propTypes = propTypes;

export default TabIcon;
