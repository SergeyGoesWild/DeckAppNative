import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import style from './styles/cardDetailsStyles'

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
      return <Image style={{ height: 16, width: 16 }} source={imageUrl} />;
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
        console.error('Error fetching card details:', error);
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
          <Text style={style.types}>{cardDetails.types}</Text>
          {cardDetails.description && (
            <>
          <Text style={style.title}>Description : </Text>
          <Text style={style.description}>{cardDetails.description}</Text>
          </>
          )}
          <Text style={style.title}>Attacks: </Text>
          {cardDetails.attacks.map((attack, index) => (
  <View key={index} style={style.attackContainer}>
    <Text style={style.attackName}>{attack.name}</Text>
    {attack.cost && (
      <Text style={style.attacks}>
        Cost: {Array.isArray(attack.cost) ? attack.cost.map(renderCostImage) : renderCostImage(attack.cost)}
      </Text>
    )}
    <Text style={style.attackEffect}>Effect: {attack.effect}</Text>
    {attack.damage && <Text style={style.attackDamage}>Damage: {attack.damage}</Text>}
  </View>
))}
          <Image source={{ uri: `${cardDetails.image}/high.webp` }} style={style.image}/>
        </>
      ) : (
        <Text>No details available</Text>
      )}
    </View>
    </ScrollView>

  );
};

export default CardDetails;
