import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    TouchableWithoutFeedback,
  } from 'react-native';
  import React, {useRef, useState} from 'react';

  const Dropdown = ({options}) => {
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(options);
    const [selectedLabel, setSelectedLabel] = useState('');
    const searchRef = useRef();

    const onSearch = search => {
      if (search !== '') {
        let tempData = data.filter(item => {
          return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        setData(tempData);
      } else {
        setData(options);
      }
    };

    const handleOutsidePress = () => {
      if (clicked) {
        setClicked(false);
      }
    };

    return (
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              borderRadius: 10,
              borderWidth: 0.5,
              alignSelf: 'center',
              marginTop: 100,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 15,
              paddingRight: 15,
              borderColor: "white"
            }}
            onPress={() => {
              setClicked(!clicked);
            }}>
            <Text style={{fontWeight:'600', color: "white"}}>
              {selectedLabel === '' ? 'Select...' : selectedLabel}
            </Text>
            {clicked ? (
              <Image
                source={require('../assets/upload.png')}
                style={{width: 20, height: 20, tintColor: "white"}}
              />
            ) : (
              <Image
                source={require('../assets/dropdown.png')}
                style={{width: 20, height: 20, tintColor: "white"}}
              />
            )}
          </TouchableOpacity>
          {clicked ? (
            <View
              style={{
                elevation: 5,
                marginTop: 20,
                height: 300,
                alignSelf: 'center',
                width: '90%',
                backgroundColor: '#1D1F24',
                borderRadius: 10,
              }}>
              <TextInput
                placeholder="Search.."
                value={search}
                ref={searchRef}
                onChangeText={txt => {
                  onSearch(txt);
                  setSearch(txt);
                }}
                placeholderTextColor="white"
                style={{
                  width: '90%',
                  height: 50,
                  alignSelf: 'center',
                  borderWidth: 0.4,
                  borderColor: 'white',
                  borderRadius: 7,
                  marginTop: 20,
                  paddingLeft: 20,
                  color: "white"
                }}
              />
    
              <FlatList
                data={data}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        width: '85%',
                        alignSelf: 'center',
                        height: 50,
                        justifyContent: 'center',
                        borderBottomWidth: 0.5,
                        borderColor: 'black',
                      }}
                      onPress={() => {
                        setSelectedLabel(item.label);
                        setClicked(!clicked);
                        onSearch('');
                        setSearch('');
                      }}>
                      <Text style={{fontWeight: '600', color: "white"}}>{item.label}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  
  export default Dropdown;
