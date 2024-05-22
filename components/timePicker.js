import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const hours = [...Array(12).keys()].map(i => i + 1);
const minutes = [...Array(60).keys()].map(i => i.toString().padStart(2, '0'));
const periods = ['AM', 'PM'];

const TimePicker = ({ onHourChange, onMinuteChange, onPeriodChange }) => {
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [selectedPeriod, setSelectedPeriod] = useState('AM');

  const renderItem = ({ item, index, type }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        if (type === 'hour') {
          setSelectedHour(item);
          onHourChange(item);
        } else if (type === 'minute') {
          setSelectedMinute(item);
          onMinuteChange(item);
        } else if (type === 'period') {
          setSelectedPeriod(item);
          onPeriodChange(item);
        }
      }}
    >
      <Text style={[styles.text, selectedStyle(item, type)]}>{item}</Text>
    </TouchableOpacity>
  );

  const selectedStyle = (item, type) => {
    if (type === 'hour' && item === selectedHour) {
      return styles.selectedText;
    }
    if (type === 'minute' && item === selectedMinute) {
      return styles.selectedText;
    }
    if (type === 'period' && item === selectedPeriod) {
      return styles.selectedText;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={styles.label}>Hour</Text> */}
        <FlatList
          data={hours}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => renderItem({ item, index, type: 'hour' })}
          getItemLayout={(data, index) => ({ length: height / 10, offset: (height / 10) * index, index })}
          initialScrollIndex={hours.indexOf(selectedHour)}
          snapToInterval={height / 10}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          style={styles.picker}
        />
      </View>
      <View>
        {/* <Text style={styles.label}>Minute</Text> */}
        <FlatList
          data={minutes}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => renderItem({ item, index, type: 'minute' })}
          getItemLayout={(data, index) => ({ length: height / 10, offset: (height / 10) * index, index })}
          initialScrollIndex={minutes.indexOf(selectedMinute)}
          snapToInterval={height / 10}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          style={styles.picker}
        />
      </View>
      <View>
        {/* <Text style={styles.label}>Period</Text> */}
        <FlatList
          data={periods}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => renderItem({ item, index, type: 'period' })}
          getItemLayout={(data, index) => ({ length: height / 10, offset: (height / 10) * index, index })}
          initialScrollIndex={periods.indexOf(selectedPeriod)}
          snapToInterval={height / 10}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          style={styles.picker}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    padding: 2,
    width: "100%",
    gap: 10
  },
  picker: {
    height: 180,
    width: 50,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
  },
  text: {
    fontSize: 24,
    color: "#1D1F24"
  },
  selectedText: {
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default TimePicker;
