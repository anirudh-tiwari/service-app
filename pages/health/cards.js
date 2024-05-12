import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ item, marginTop = 0 }) => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 16 - 32) / 2;

  navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        width: cardWidth,
        marginRight: 0,
        marginTop: marginTop,
        backgroundColor: "#252A32",
        marginBottom: 30,
        height: 160,
      }}
      onPress={() => navigation.navigate("Doctor", { name: item.name })}
    >
      <View style={{ width: "100%", padding: 5 }}>
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: 110,
            borderRadius: 20,
            objectFit: "cover",
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "white",
            alignSelf: "center",
            marginVertical: 6,
          }}
        >
          {item.name}
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            padding: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 18,
            backgroundColor: "#0096FF",
            position: "absolute",
            height: 24,
            bottom: -16,
            width: 100,
            left: 28,
            zIndex: 99999999999,
          }}
          onPress={() => {}}
        >
          <Text style={{ fontSize: 12, color: "white" }}>MORE</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
