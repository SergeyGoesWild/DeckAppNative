import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import style from './styles/cardDetailsStyles'
import AttackCost from './AttackCost';

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
          <Text style={style.name}>{cardDetails.name}</Text>
          <Text style={style.setname}>{cardDetails.set.name}</Text>
          <Text style={style.rarity}>{cardDetails.rarity}</Text>
          <View style={style.paragraph}>
          <Text style={style.types}>{cardDetails.types}</Text>
          </View>
          {cardDetails.description && (
        <>
          <Text style={style.title}>Description : </Text>
          <View style={style.paragraph}>
          <Text style={style.description}>{cardDetails.description}</Text>
          </View>
        </>
          )}
          <Text style={style.title}>Attacks: </Text>
          {cardDetails.attacks.map((attack, index) => (
     <View key={index} style={style.attacks}>
           <Text style={style.attacks}>{attack.name}</Text>
    {attack.cost && (
          <AttackCost cost={attack.cost} renderCostImage={renderCostImage} />
    )}
             <Text style={style.attacks}>Effect: {attack.effect}</Text>
    {attack.damage && <Text style={style.attacks}>Damage: {attack.damage}</Text>}
      </View>
    ))}
        </>
      ) : (
        <Text>No details available</Text>
      )}
    </View>
    </ScrollView>

  );
};

export default CardDetails;
