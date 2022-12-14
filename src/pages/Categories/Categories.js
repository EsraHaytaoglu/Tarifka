import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import styles from './Categories.style';
import Config from 'react-native-config';
import axios from 'axios';
import CategoryCard from '../../components/Category/CategoryCard';
import useFetch from '../../hooks/useFetch';

function Categories(props) {
  console.log(Config.API_URL);
  const {loading, data, error} = useFetch(Config.API_URL);
  function navigateToPage() {
    props.navigation.navigate('Meals');
  }
  const renderCategory = ({item}) => <CategoryCard category={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderCategory} />
      <Button title="Go to Meal" onPress={navigateToPage} />
    </View>
  );
}
export default Categories;
