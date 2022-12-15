import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    flexDirection: 'row',
    width: Dimensions.get('window').width / 1.1,
  },
  image: {
    marginHorizontal: 20,
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
