import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import Cards from "./card";
import { priorityList } from "./utils";

const Priority = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.heading]}>Priority Voting Issues</Text>
        <Text style={[styles.heading2]}>
          5 Most-voted issues get priority. Vote accordingly.
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={priorityList}
        renderItem={({ item }) => <Cards width={284} item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default Priority;

const styles = StyleSheet.create({
  container: {
    position: "sticky",
    zIndex: 999999,
    top: 0,
    marginBottom: 4,
  },
  heading: {
    fontSize: 17,
    color: "white",
    fontWeight: "600",
    // marginBottom: 6,
  },
  heading2: {
    fontSize: 14,
    color: "#676D75",
    fontWeight: "600",
    marginBottom: 6,
  },
  card: {
    backgroundColor: "#FFE5B4",
    height: 140,
    width: "86%",
    borderRadius: 16,
  },
});
