import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Keyboard from '../components/Keyboard';

const Calender = () => {
  const [math, setMath] = useState(0);
  const [curentNumber, setCurrentNumber] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={math} placeholder="1 + 1" />
      <Text style={styles.result}>Kết quả: </Text>
      <Keyboard />
    </View>
  );
};

export default Calender;

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
