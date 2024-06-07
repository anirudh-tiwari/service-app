import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { curriculum } from './utils';

const ClassList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {Object.keys(curriculum).map((classKey, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.classButton} 
          onPress={() => navigation.navigate('Curriculum', { classKey })}
        >
          <Text style={styles.classText}>{curriculum[classKey].title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  classText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ClassList;
