import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "./header";
import { useState } from "react";
import Priority from "./priority";
import Issues from "./issues";
import SingleCard from "./single-card";
import Tags from "./tags";
import { tagsData } from "./utils";

const Locality = () => {
  const [activeTag, setActiveTag] = useState("reported");

  return (
    <View style={styles.Wrapper}>
      <Header />
      <ScrollView
        stickyHeaderIndices={[2]}
        showsVerticalScrollIndicator={false}
      >
        <Priority />
        <View style={styles.container}>
        <Text style={[styles.heading]}>Reported Issues</Text>
      </View>
      <Tags
        listData={tagsData}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />
        <Issues />
      </ScrollView>
    </View>
  );
};

export default Locality;

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: "black",
    flex: 1,
    justifyConttent: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  bodyRadius: {
    borderRadius: 40,
    backgroundColor: "black",
    height: 66,
    position: "relative",
    top: -40,
    zIndex: 0,
  },
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
});
