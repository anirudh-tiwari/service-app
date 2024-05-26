import { View, Text, StyleSheet, ScrollView, FlatList, Image } from "react-native";
import React, { useState } from "react";
import SingleCard from "./single-card";
import { issueList, NoSearch } from "./utils";
import { isEmpty } from "lodash";

const Issues = ({ activeTag }) => {
  return (
    <View style={{ marginTop: 42 }}>
      {isEmpty(issueList[activeTag]) ? (
       <View style={{marginTop:0, flexDirection: "column", gap:2,alignItems: "center"}}>
          <Image
          source={require('../../assets/no-data.png')}
          style={{
            width: 130,
            height: 130,
            objectFit: "cover",
          }}
        />
          <Text style={{
            fontSize:18,
            color: "white",
            fontWeight: "600"
          }}>No Issue Found</Text>
        </View>
      ) : (
        issueList[activeTag].map((data, index) => {
          return <SingleCard item={data} key={index} />;
        })
      )}
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
