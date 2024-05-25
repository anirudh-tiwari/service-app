import { View, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Cards = ({ item, marginTop = 0, width = "100%" }) => {
  navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        width: width,
        marginRight: 14,
        marginTop: marginTop,
        backgroundColor: "#252A32",
        marginBottom: 20,
        height: 140,
      }}
      onPress={() =>
        navigation.navigate("SingleDoctor")
      }
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 8,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
        //   source={item.image}
          source={require('../../assets/pathole.jpg')}
          style={{
            width: "38%",
            height: "100%",
            borderRadius: 0,
            objectFit: "cover",
            borderRadius: 20,
          }}
        />
        <View style={{ flexShrink: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "white",
              marginBottom: 4,
            }}
          >
            {/* {item.name} */}
            Pothole
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "#AEAEAE",
            }}
          >
            {/* {item.desc} */}
            Large pothole on Main St.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
