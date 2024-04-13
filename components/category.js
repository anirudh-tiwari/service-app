import { View, TouchableOpacity, Text, Image, Dimensions } from "react-native";

const Category = ({
  item,
  marginTop = 0,
}) => {

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 32 - 16) / 2;
  console.log('anicardWidth',cardWidth);

  return (
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
            height: 140,
            borderRadius: 20,
            objectFit: 'fill'
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
  );
};

export default Category;
