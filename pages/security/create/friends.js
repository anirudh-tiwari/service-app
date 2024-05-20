import { View, Image } from "react-native";

const Friends = () => {

  return (
    <>
      <View
        style={{
          marginTop: 64,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../../assets/addUser.png")}
          style={{
            height: 360,
            objectFit: "contain",
          }}
        />
      </View>
      {/* <View style={{ position: "absolute", right: 20, bottom: 20, width: 60 }}>
        <Image
          source={require("../../../assets/plus.png")}
          style={{
            height: 50,
            width: "100%",
            objectFit: "contain",
          }}
        />
      </View> */}
    </>
  );
};

export default Friends;
