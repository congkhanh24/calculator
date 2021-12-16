import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const Item = ({number, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text>{number}</Text>
    </TouchableOpacity>
  );
};

const Keyboard = ({data, onPress}) => {
  const renderItem = ({item}) => (
    <Item onPress={() => onPress(item)} number={item.number} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={4}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Keyboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  result: {
    fontSize: 30,
  },
  item: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
  },
  item_text: {
    fontSize: 30,
  },
});
