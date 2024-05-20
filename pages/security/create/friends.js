import { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import AddContacts from "./add-contacts";
import { useNavigation } from "@react-navigation/native";

const Friends = () => {
  navigation = useNavigation();

  return (
    <>
        <TouchableOpacity
          style={{
            marginTop: 64,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("AddContacts") }
        >
          <Image
            source={require("../../../assets/addUser.png")}
            style={{
              height: 360,
              objectFit: "contain",
            }}
          />
        </TouchableOpacity>
    </>
  );
};

export default Friends;

{
  /* <View style={{ position: "absolute", right: 20, bottom: 20, width: 60 }}>
        <Image
          source={require("../../../assets/plus.png")}
          style={{
            height: 50,
            width: "100%",
            objectFit: "contain",
          }}
        />
      </View> */
}
