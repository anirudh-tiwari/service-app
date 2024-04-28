import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Cards = ({
  item,
  marginTop = 0,
  hasCart = false,
  hasWhishList = false,
}) => {
  let heartIcon = require("../../assets/heart.png");
  if (hasWhishList) {
    heartIcon = require("../../assets/heart.png");
  }

  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 16 - 32) / 2;

  navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        width: cardWidth,
        marginRight: 14,
        marginTop: marginTop,
        backgroundColor: "#252A32",
        marginTop: 18,
      }}
      onPress={()=> navigation.navigate("SingleMenu", { item: item })}
    >
      <View style={{ width: "100%", padding: 10 }}>
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: 126,
            borderRadius: 20,
            objectFit: "cover",
          }}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            fontWeight: "600",
            color: "white",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            marginTop: 0,
            fontSize: 16,
            marginBottom: 10,
            fontWeight: "400",
            color: "white",
          }}
        >
          {item.desc}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              fontWeight: "600",
              color: "white",
              lineHeight: 24
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                color: "#F37B2D",
              }}
            >
              रु{" "}
            </Text>
            {item.price}
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              padding: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "#F37B2D",
            }}
            onPress={() => {}}
          >
            <Ionicons name="chevron-forward-outline" size={24} color="white" />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
