import React from 'react';
import { View, Text } from 'react-native';
import style from './styles/cardDetailsStyles';
import * as Animatable from 'react-native-animatable';

const AttackCost = ({ cost, renderCostImage }) => {
  if (!cost) {
    return null;
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={style.attacks}>Cost : </Animatable.Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {Array.isArray(cost) ? (
          cost.map((costItem, index) => (
            <View key={index} style={{ alignItems: 'center', marginRight: 5 }}>
              {renderCostImage(costItem)}
            </View>
          ))
        ) : (
          <View style={{ alignItems: 'center', marginRight: 5 }}>
            {renderCostImage(cost)}
          </View> 
        )}
      </View>
    </View>
  );
};

export default AttackCost;
