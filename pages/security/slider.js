import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, PanResponder, FlatList, Dimensions, KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Slider = ({ isVisible, onClose }) => {
  const screenHeight = Dimensions.get('window').height;
  const sliderRef = useRef(null);
  const [selectedDuration, setSelectedDuration] = useState('Always');
  const [searchText, setSearchText] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [sliderPosition, setSliderPosition] = useState(screenHeight);
  const isDragging = useRef(false);

  const contacts = [
    { id: 1, name: 'Avinash Tiwari', image: require("../../assets/avinash.jpeg") },
    { id: 2, name: 'Anurag', image: require("../../assets/anurag.jpeg") },
    // Add more contacts here
  ];

  useEffect(() => {
    setFilteredContacts(contacts);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      if (isVisible) {
        sliderRef.current.transitionTo({ bottom: 0 });
        setSliderPosition(0);
      } else {
        sliderRef.current.transitionTo({ bottom: -screenHeight });
        setSliderPosition(screenHeight);
      }
    }
  }, [isVisible]);

  useEffect(() => {
    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchText]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt) => {
        const { locationY } = evt.nativeEvent;
        isDragging.current = locationY < 40; // Check if the touch starts within the handle bar area
        return isDragging.current;
      },
      onMoveShouldSetPanResponder: () => isDragging.current,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          sliderRef.current.transitionTo({ bottom: -gestureState.dy });
          setSliderPosition(-gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > screenHeight / 4) {
          onClose();
        } else {
          sliderRef.current.transitionTo({ bottom: 0 });
          setSliderPosition(0);
        }
        isDragging.current = false;
      },
    })
  ).current;

  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Image source={item.image} style={styles.contactImage} />
      <Text style={styles.contactName}>{item.name}</Text>
    </View>
  );

  return (
    <Animatable.View
      ref={sliderRef}
      style={[styles.sliderContainer, { bottom: -sliderPosition }]}
      {...panResponder.panHandlers}
    >
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.handleBarContainer}>
          <View style={styles.handleBar} />
        </View>
        <Text style={styles.title}>Select friends & share your live location</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Type to search"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
        <View style={styles.contactsContainer}>
          <Text style={styles.allContactsText}>All contacts</Text>
          <FlatList
            data={filteredContacts}
            renderItem={renderContactItem}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={<Text style={styles.noContactsText}>No Friends Found</Text>}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.liveLocationDurationText}>Live location duration</Text>
          <View style={styles.radioButtonsContainer}>
            <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedDuration('Always')}>
              <View style={[styles.radioButtonOuter, selectedDuration === 'Always' && styles.radioButtonOuterSelected]}>
                {selectedDuration === 'Always' && <View style={styles.radioButtonInner} />}
              </View>
              <Text style={styles.radioButtonText}>Always</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedDuration('1 Hour')}>
              <View style={[styles.radioButtonOuter, selectedDuration === '1 Hour' && styles.radioButtonOuterSelected]}>
                {selectedDuration === '1 Hour' && <View style={styles.radioButtonInner} />}
              </View>
              <Text style={styles.radioButtonText}>1 Hour</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedDuration('8 Hour')}>
              <View style={[styles.radioButtonOuter, selectedDuration === '8 Hour' && styles.radioButtonOuterSelected]}>
                {selectedDuration === '8 Hour' && <View style={styles.radioButtonInner} />}
              </View>
              <Text style={styles.radioButtonText}>8 Hour</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.continueButton} activeOpacity={1} onPress={()=>{
            ToastAndroid.show("Successfully Shared", ToastAndroid.SHORT);
            onClose();
          }}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '111%',
    backgroundColor: '#E8F5E9', // Updated color
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
  },
  handleBarContainer: {
    width: '100%',
    alignItems: 'center',
  },
  handleBar: {
    width: 40,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  contactsContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  allContactsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  contactName: {
    fontSize: 16,
    color: '#333',
  },
  noContactsText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 54,
  },
  liveLocationDurationText: {
    fontSize: 17,
    color: '#666',
    marginBottom: 10,
    fontWeight: '700',
    marginBottom: 24,
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    gap: 30,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 24,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#19A519',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  radioButtonOuterSelected: {
    borderColor: '#19A519',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#19A519',
  },
  radioButtonText: {
    fontSize: 16,
    color: '#333',
  },
  bottomContainer: {
    paddingBottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  continueButton: {
    backgroundColor: '#388E3C', // Adjust this color to match your theme
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Slider;
