import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import CardDetails from './CardDetails';
import style from './styles/tabModalStyles'

const TabComponent = ({ card }) => {
  const [activeTab, setActiveTab] = useState('Tab1');
  console.log(card);

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={style.container}>
      <View style={style.tabContainer}>
        <TouchableOpacity
          style={[style.tab, activeTab === 'Tab1' && style.activeTab]}
          onPress={() => handleTabPress('Tab1')}
        >
          <Text style={style.tabText}>Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.tab, activeTab === 'Tab2' && style.activeTab]}
          onPress={() => handleTabPress('Tab2')}
        >
          <Text style={style.tabText}>Details</Text>
        </TouchableOpacity>
      </View>
      <View style={style.content}>
        {activeTab === 'Tab1' ? (
          <Image source={{ uri: card.imageUrl }} style={style.cardImage} />
        ) : (
          <CardDetails card={card.id} />
        )}
      </View>
    </View>
  );
};



export default TabComponent;
