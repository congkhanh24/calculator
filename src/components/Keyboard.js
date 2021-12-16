import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
const DATA = [
  {
    id: 1,
    number: 'C',
  },
  {
    id: 2,
    number: 'Xóa',
  },
  {
    id: 3,
    number: '=',
  },
  {
    id: 4,
    number: '/',
  },
  {
    id: 5,
    number: '7',
  },
  {
    id: 6,
    number: '8',
  },
  {
    id: 7,
    number: '9',
  },
  {
    id: 8,
    number: 'X',
  },
  {
    id: 9,
    number: '4',
  },
  {
    id: 10,
    number: '5',
  },
  {
    id: 11,
    number: '6',
  },
  {
    id: 12,
    number: '+',
  },
  {
    id: 13,
    number: '1',
  },
  {
    id: 14,
    number: '2',
  },
  {
    id: 15,
    number: '3',
  },
  {
    id: 16,
    number: '-',
  },
];
const Item = ({number, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text>{number}</Text>
    </TouchableOpacity>
  );
};

const Keyboard = () => {
  const renderItem = ({item}) => <Item number={item.number} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
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
