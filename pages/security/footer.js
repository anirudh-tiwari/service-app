import { View, TouchableOpacity, Image, Text } from "react-native";
import { useState } from "react";

const Footer = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{flex:1}}>
         {selectedTab == 0 ? (
        <Text>0</Text>
      ) : selectedTab == 1 ? (
        <Text>0</Text>
      ) : selectedTab == 2 ? (
        <Text>0</Text>
      ) : selectedTab == 3 ? (
        <Text>0</Text>
      ) : (
        <Text>0</Text>
      )}
     <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          height: 50,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(0)}
        >
          <Image
            source={require("../../assets/pizza.png")}
            style={{ width: 24, height: 24, tintColor: selectedTab === 0 ? 'green' : 'black' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(1)}
        >
          <Image
            source={require("../../assets/pizza.png")}
            style={{ width: 24, height: 24,tintColor: selectedTab === 1 ? 'green' : 'black' }}
          />
        </TouchableOpacity>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            style={{
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: selectedTab === 2 ? 'green' : 'black',
              borderRadius: 50,
              height: 50,
              alignSelf: "center",
            }}
            onPress={() => setSelectedTab(2)}
          >
            <Image
              source={require("../../assets/pizza.png")}
              style={{ width: 24, height: 24, tintColor: "white" }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            style={{
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              height: 50,
              alignSelf: "center",
            }}
            onPress={() => setSelectedTab(3)}
          >
            <Image
              source={require("../../assets/pizza.png")}
              style={{ width: 24, height: 24,tintColor: selectedTab === 3 ? 'green' : 'black' }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(4)}
        >
          <Image
            source={require("../../assets/pizza.png")}
            style={{ width: 24, height: 24,tintColor: selectedTab === 4 ? 'green' : 'black' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer