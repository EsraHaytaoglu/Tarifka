import React from 'react';
import {View, FlatList, Text, Linking, Alert} from 'react-native';
import Config from 'react-native-config';
import DetailCard from '../../components/DetailCard/DetailCard';
import useFetch from '../../hooks/useFetch';
import styles from './Details.styles';

function Details({route}) {
  const {idMeal} = route.params;
  const {loading, error, data} = useFetch(
    `${Config.API_URL}lookup.php?i=${idMeal}`,
  );
  const goToYoutube = url => {
    try {
      Linking.openURL(url);
    } catch {
      Alert.alert('No video!');
      console.log('youtube hatası');
    }
  };

  const renderMeal = ({item}) => (
    <DetailCard meal={item} openYoutube={() => goToYoutube(item.strYoutube)} />
  );
  if (loading) {
    // return <Loading />;
    console.log('loading');
  }
  if (error) {
    // return <Error />;
    console.log('error');
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeal} />
      <Text>strCategory</Text>
    </View>
  );
}
export default Details;
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
// https://www.themealdb.com/api/json/v1/1/
