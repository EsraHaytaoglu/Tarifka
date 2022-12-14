import React from 'react';
import {View, Text, Button} from 'react-native';

function Meals({navigation}) {
  function backtoFirst() {
    navigation.goBack();
  }
  return (
    <View>
      <Text>Meals</Text>
      <Button title="Go to back" onPress={backtoFirst} />
    </View>
  );
}
export default Meals;
