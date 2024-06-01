import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from "react";

const Header = () => {
  navigation = useNavigation();
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      navigation.navigate("CreateIssue",{img: result.assets[0].uri})
      setImage(result.assets[0].uri);
    }
  };

  useEffect

  return (
    <View style={{ marginBottom: 14 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.container1}>
          <Text style={styles.header}>Local Voice,</Text>
          <Text style={styles.description}>North East, Delhi</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.add}>
          <TouchableOpacity onPress={pickImage} activeOpacity={1}>
            <Ionicons name="add" size={26} color="white" />
          </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="notifications-outline" size={28} color="#E74C3C" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    color: "white",
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    color: "#858585",
    fontWeight: "400",
    marginTop: 2,
  },
  container1: {
    flex: 10,
  },
  container2: {
    flexDirection: "row",
    gap: 16
  },
  add: {
    height: 27,
    width: 27,
    backgroundColor: "#E74C3C",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
