import { View, Text, StyleSheet } from "react-native";
import Header from "./header";
import { useState } from "react";
import Priority from "./priority";
import Issues from "./issues";
import SingleCard from "./single-card";

const Locality = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.Wrapper}>
      <Header />
      <Priority />
      {/* <Issues /> */}
      <SingleCard />
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
    paddingTop: 16
  },
  bodyRadius: {
    borderRadius: 40,
    backgroundColor: "black",
    height: 66,
    position: "relative",
    top: -40,
    zIndex: 0,
  },
});
