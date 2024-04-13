import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";

const Category = ({
  item,
  marginTop = 0,
  index,
}) => {

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 32 - 16) / 2;
  console.log('anicardWidth',cardWidth);

  return (
    <Animatable.View animation="zoomIn" duration={1000} delay={index * 300}>
    <TouchableOpacity
      style={{
        borderRadius: 20,
        elevation: 5, // ADD BOX-SHADOW
        width: cardWidth,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop: 0,
        // width: cardWidth
      }}
    >
      <View style={{ width: "100%" }}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: 142,
            borderRadius: 20,
            objectFit: 'fill',
          }}
        />

        {/* <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            fontWeight: "600",
            borderTopWidth: 1,
            paddingLeft: 20,
            borderColor: '#85838e'
          }}
        >
          {item.name}
        </Text> */}
      </View>
    </TouchableOpacity>
    </Animatable.View>
  );
};

export default Category;
