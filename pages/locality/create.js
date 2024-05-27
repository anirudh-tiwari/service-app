import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Dropdown from "../../components/dropDown";

const Create = () => {
  const image = useRoute();
  const { img } = image?.params;

  console.log("aniimage", image);

  return (
    <View style={styles.createWrapper}>
      {img && (
        <Image
          source={{ uri: img }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      )}
      <Dropdown options={[{ label: "Anirudh"}, {label: "Avinash" }]} />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  createWrapper: {
    flex: 1,
    backgroundColor: "black",
  },
});
