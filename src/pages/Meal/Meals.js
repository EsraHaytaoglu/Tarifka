import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import MealCard from '../../components/MealCard/MealCard';
import useFetch from '../../hooks/useFetch';
import styles from './Meals.styles';

function Meals({route, navigation}) {
  const {strCategory} = route.params;
  console.log(`${Config.API_URL}filter.php?c=${strCategory}`);
  const {loading, error, data} = useFetch(
    `${Config.API_URL}filter.php?c=${strCategory}`,
  );

  const handleMealSelect = idMeal => {
    navigation.navigate('Details', {idMeal});
  };
  const renderMeal = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
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
export default Meals;
// www.themealdb.com/api/json/v1/1/categories.php
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
