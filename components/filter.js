import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FilterIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="filter" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F37B2D',
    borderRadius: 20, // Adjust the value based on your preference
    width: 40, // Adjust the size based on your preference
    height: 40, // Adjust the size based on your preference
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FilterIcon;