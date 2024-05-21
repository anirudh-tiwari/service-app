import { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ContactSelectors } from "../../../store/features/contact";
import { size } from "lodash";
import { Ionicons } from "@expo/vector-icons";

const Friends = () => {
  navigation = useNavigation();
  const { contactList } = ContactSelectors();

  return (
    <>
      {size(contactList) ? (
        contactList.map((data, index) => {
          return (
            <View style={styles.cardContainer} key={index}>
              <Image
                source={require("../../../assets/freind2.png")}
                style={{
                  height: 64,
                  objectFit: "contain",
                  width: 68,
                  backgroundColor: "#C7F6C7",
                  borderRadius: 20,
                }}
              />
              <View>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.text}>{data.phone}</Text>
              </View>
              <View style={{alignItems:"flex-end", flex:1, marginTop:2}}>
              <Ionicons name="ellipsis-vertical-outline" color="white" size={24}></Ionicons>
              </View>
            </View>
          );
        })
      ) : (
        <TouchableOpacity
          style={{
            marginTop: 64,
            alignItems: "center",
            justifyContent: "center",
          }}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("AddContacts")}
        >
          <Image
            source={require("../../../assets/addUser.png")}
            style={{
              height: 360,
              objectFit: "contain",
            }}
          />
        </TouchableOpacity>
      )}
      {size(contactList) ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("AddContacts")}
          style={{ position: "absolute", right: 20, bottom: 20, width: 60 }}
        >
          <Image
            source={require("../../../assets/plus.png")}
            style={{
              height: 50,
              width: "100%",
              objectFit: "contain",
            }}
          />
        </TouchableOpacity>
      ) : null}
    </>
  );
};

export default Friends;

const styles = StyleSheet.create({
  cardContainer: {
    height: 60,
    width: "100%",
    borderRadius: 16,
    marginTop: 28,
    flexDirection: "row",
    gap: 16,
    // backgroundColor: "red"
  },
  name: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
  text: {
    fontSize: 16,
    color: "#F8F8FF",
    fontWeight: "300",
  },
});
