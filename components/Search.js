import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={text => setSearchTerm(text)}
        value={searchTerm}
      />
      {searchTerm !== '' && (
        <TouchableOpacity onPress={handleClearSearch} style={styles.clearButton}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'gray',
    height: 44,
    borderRadius: 24,
    marginTop: 18,
    width: '100%'
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  clearButton: {
    padding: 5,
  },
});

export default SearchComponent;
