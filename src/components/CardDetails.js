import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import style from './styles/cardDetailsStyles'
import AttackCost from './AttackCost';
import * as Animatable from 'react-native-animatable';

const CardDetails = ({ card }) => {
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const costTypeImages = {
    Colorless: require('../../assets/colorless.png'),
    Psychic: require('../../assets/psychic.png'),
    Fire: require('../../assets/fire.png'),
    Grass: require('../../assets/grass.png'),
    Fairy: require('../../assets/fairy.png'),
    Fighting: require('../../assets/fighting.png'),
    Metal: require('../../assets/metal.png'),
    Dragon: require('../../assets/dragon.png'),
    Water: require('../../assets/water.png'),
    Dark: require('../../assets/dark.png'),
  };
  
  const renderCostImage = (costType) => {
    const imageUrl = costTypeImages[costType];
    if (imageUrl) {
      return <Image style={{ height: 24, width: 24, resizeMode:'cover'}} source={imageUrl} />;
    }
  
    return null;
  };

  useEffect(() => {
    const fetchCardDetails = async () => {
      setLoading(true);
      try {
        const url = `https://api.tcgdex.net/v2/en/cards/${card}`;
        const response = await fetch(url);
        const data = await response.json();
        setCardDetails(data);
      } catch (error) {
        throw new Error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, [card]);

  if (loading) {
    return (
      <View style={style.loadingContainer}>
        <Text> Still loading</Text>
      </View>
    );
  }

  return (
    <ScrollView>
    <View style={style.container}>
      {cardDetails ? (
        <>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.name}>{cardDetails.name}</Animatable.Text>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.rarity}>{cardDetails.set.name}</Animatable.Text>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.setname}>{cardDetails.rarity}</Animatable.Text>
          <View style={style.paragraph}>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.rarity}>{cardDetails.types}</Animatable.Text>
          </View>
          {cardDetails.description && (
        <>
          <Text style={style.title}>Description : </Text>
          <View style={style.paragraph}>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.description}>{cardDetails.description}</Animatable.Text>
          </View>
        </>
          )}
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.title}>Attacks: </Animatable.Text>
          {cardDetails.attacks.map((attack, index) => (
     <View key={index} style={style.attacks}>
           <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.attacks}>{attack.name}</Animatable.Text>
    {attack.cost && (
          <AttackCost cost={attack.cost} renderCostImage={renderCostImage} />
    )}
             <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.attacks}>Effect: {attack.effect}</Animatable.Text>
    {attack.damage && <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.attacks}>Damage: {attack.damage}</Animatable.Text>}
      </View>
    ))}
        </>
      ) : (
        <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate">No details available</Animatable.Text>
      )}
    </View>
    </ScrollView>

  );
};

export default CardDetails;
