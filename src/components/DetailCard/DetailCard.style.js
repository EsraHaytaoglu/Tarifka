import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#b71c1c',
  },
  image: {
    height: Dimensions.get('window').width / 1.3,
    resizeMode: 'stretch',
  },
  area: {
    color: '#b71c1c',
    fontSize: 18,
  },
  instructions: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'red',
    height: 35,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
