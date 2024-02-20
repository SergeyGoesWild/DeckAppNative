import React from 'react';
import { View, Text } from 'react-native';
import style from './styles/cardDetailsStyles'

const AttackCost = ({ cost, renderCostImage }) => {
  if (!cost) {
    return null;
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={style.attacks}>Cost : </Text>
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
