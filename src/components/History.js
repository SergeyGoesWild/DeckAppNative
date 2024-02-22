import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const History = ({ history }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Game History:</Text>
      {history.map((item, index) => (
        <View key={index} style={styles.historyItem}>
         <Text>{`Round ${index + 1}: Player chose ${item.playerChoice}, Computer chose ${item.computerChoice}, Result: ${item.result}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    width: '100%',
    marginBottom: 5,
  },
});

export default History;
