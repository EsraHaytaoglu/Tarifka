import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Categories.style';
import Config from 'react-native-config';
import CategoryCard from '../../components/Category/CategoryCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

function Categories({navigation}) {
  const {loading, data, error} = useFetch(Config.API_URL + 'categories.php');

  const handleCategorySelect = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };
  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
}
export default Categories;
