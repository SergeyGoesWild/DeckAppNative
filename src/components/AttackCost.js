import React from 'react';
import { View, Text } from 'react-native';
import style from './styles/cardDetailsStyles';
import * as Animatable from 'react-native-animatable';

const AttackCost = ({ cost, renderCostImage }) => {
  if (!cost) {
    return null;
  }

  return (
    <Animatable.View animation="slideInDown" iterationCount={1} direction="alternate" style={style.cost}>
      <Animatable.Text style={style.attacks}>Cost : </Animatable.Text>
      <View style={style.costImg}>
        {Array.isArray(cost) ? (
          cost.map((costItem, index) => (
            <View key={index}>
              {renderCostImage(costItem)}
            </View>
          ))
        ) : (
          <View>
            {renderCostImage(cost)}
          </View> 
        )}
      </View>
    </Animatable.View>
  );
};

export default AttackCost;
