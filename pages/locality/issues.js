import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import SingleCard from "./single-card";

const Issues = () => {

  return (
    <View style={{ marginTop: 0 }}>
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </View>
  );
};

export default Issues;

const styles = StyleSheet.create({
  container: {
    position: "sticky",
    zIndex: 999999,
    top: 0,
    marginBottom: 4,
  },
  heading: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    marginBottom: 6,
  },
  heading2: {
    fontSize: 14,
    color: "#676D75",
    fontWeight: "600",
    marginBottom: 6,
  },
});
