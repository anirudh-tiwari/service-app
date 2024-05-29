import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

const Dropdown = ({ options, placeHolder = 'Select...', selected, onChange }) => {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(options);
  const searchRef = useRef();

  const onSearch = (search) => {
    if (search !== '') {
      const tempData = options.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      );
      setData(tempData);
    } else {
      setData(options);
    }
  };

  useEffect(() => {
    setData(options);
  }, [options]);

  const handleOutsidePress = () => {
    if (clicked) {
      setClicked(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={{ position: 'relative', zIndex: clicked ? 10 : 0 }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            borderRadius: 10,
            borderWidth: 1,
            alignSelf: 'center',
            marginTop: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 15,
            borderColor: '#676D75',
          }}
          activeOpacity={1}
          onPress={() => {
            setClicked(!clicked);
          }}>
          <Text style={{ fontWeight: '400', color: selected ? 'white' : "#676D75", zIndex: 0 }}>
            {selected ? selected.label : placeHolder}
          </Text>
          <Image
            source={clicked ? require('../assets/upload.png') : require('../assets/dropdown.png')}
            style={{ width: 20, height: 20, tintColor: selected ? 'white' : "#676D75" }}
          />
        </TouchableOpacity>
        {clicked && (
          <View
            style={{
              elevation: 5,
              position: 'absolute',
              top: 80,
              maxHeight: 200, // Set a max height for the dropdown list
              alignSelf: 'center',
              width: '100%',
              backgroundColor: '#1D1F24',
              borderRadius: 10,
              zIndex: 9999999,
            }}>
            <ScrollView>
              {data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    height: 50,
                    justifyContent: 'center',
                    borderBottomWidth: 0.5,
                    borderColor: 'black',
                  }}
                  activeOpacity={1}
                  onPress={() => {
                    onChange(item);
                    setClicked(false);
                    onSearch('');
                    setSearch('');
                  }}>
                  <Text style={{ fontWeight: '600', color: 'white' }}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Dropdown;
