import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './DetailCard.style';
import {Dimensions} from 'react-native';

const DetailCard = ({meal, openYoutube}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: meal.strMealThumb}} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.area}>{meal.strArea}</Text>
      <Text style={styles.instructions}>{meal.strInstructions}</Text>
      <TouchableOpacity style={styles.button} onPress={openYoutube}>
        <Text style={styles.buttonText}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DetailCard;
