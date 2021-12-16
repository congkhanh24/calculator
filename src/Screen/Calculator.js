import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Keyboard from '../components/Keyboard';

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

const Calender = () => {
  const [math, setMath] = useState('');
  const [curentNumber, setCurrentNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleMath = item => {
    if (item.number === '=') {
      setResult(eval(math));
      setMath('');
      return;
    }
    if (item.id === 2) {
      setMath(math.substring(0, math.length - 1));
      return;
    }
    if (item.number === 'C') {
      setMath('');
      setResult(0);
      return;
    }
    setMath(math + item.number);
    console.log(math);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={math} placeholder="1 + 1" />
      <Text style={styles.result}>Kết quả: {result}</Text>
      <Keyboard data={DATA} onPress={handleMath} />
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
