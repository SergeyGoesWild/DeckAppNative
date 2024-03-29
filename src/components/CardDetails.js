import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import style from './styles/cardDetailsStyles'
import AttackCost from './AttackCost';
import * as Animatable from 'react-native-animatable';
import { costTypeImages, typesImages } from './imageData';

const CardDetails = ({ card }) => {
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const renderCostImage = (costType) => {
    const imageUrl = costTypeImages[costType];
    if (imageUrl) {
      return <Image style={style.renderCost} source={imageUrl} />;
    }
    return null;
  };

  const renderTypesImage = (pokeType) => {
    const imageUrl = typesImages[pokeType];
    if (imageUrl) {
      return <Image style={style.renderType} source={imageUrl} />;
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
        <Animatable.View animation="slideInDown" iterationCount={1} direction="alternate" style={style.typesContainer}>
          {cardDetails.types.map((type, index) => (
          <View key={index} style={style.typeItem}>
                {renderTypesImage(type)}
           </View>
            ))}
          </Animatable.View>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.name}>{cardDetails.name}</Animatable.Text>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.setname}>Set : {cardDetails.set.name}</Animatable.Text>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.rarity}>{cardDetails.rarity}</Animatable.Text>
          
          {cardDetails.description && (
        <>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.title}>Description : </Animatable.Text>
          <Animatable.View animation="slideInDown" iterationCount={1} direction="alternate" style={style.paragraph}>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.description}>{cardDetails.description}</Animatable.Text>
          </Animatable.View>
        </>
          )}
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.title}>Attacks: </Animatable.Text>
          {cardDetails.attacks.map((attack, index) => (
     <View key={index} style={style.attacks}>
           <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.attackName}>{attack.name}</Animatable.Text>
    {attack.cost && (
          <AttackCost cost={attack.cost} renderCostImage={renderCostImage} />
    )}
             <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.attacks}>Effect:</Animatable.Text>
             <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.attacks}>{attack.effect}</Animatable.Text>
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
