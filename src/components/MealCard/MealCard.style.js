import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    width: Dimensions.get('window').width / 1.1,
  },
  image: {
    height: Dimensions.get('window').width / 3,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    bottom: 0,
    paddingRight: 5,
  },
});
