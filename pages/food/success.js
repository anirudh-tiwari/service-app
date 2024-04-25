import { View, Image, Text } from "react-native";

const Success = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#EFD8D1" }}>
      <Image
        source={require("../../assets/success1.png")}
        style={{
          width: "100%",
        //   height: 126,
          borderRadius: 20,
          objectFit: "contain",
        }}
      />
      <View style={{ alignItems: "center", paddingHorizontal: 36 }}>
        <Text style={{ fontSize: 32, color: "white", fontWeight: "800" }}>
          Order Successful
        </Text>
        <Text style={{ fontSize: 15, color: "gray", textAlign: "center", fontWeight: "600", marginTop: 4 }}>
          Once your order is placed, We'll offer live video coverage of the
          preparation process.
        </Text>
      </View>
    </View>
  );
};

export default Success;
