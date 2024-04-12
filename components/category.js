import { View, TouchableOpacity, Text, Image } from "react-native";

const Category = ({
  item,
  marginTop = 0,
}) => {

  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        elevation: 5, // ADD BOX-SHADOW
        width: 160,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: 10,
      }}
    >
      <View style={{ width: "100%" }}>
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: 120,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            objectFit: 'scale-down'
          }}
        />

        <Text
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
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
