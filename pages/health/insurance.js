import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListItem = ({ text }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.bullet}>•</Text>
      <Text style={[styles.text]}>{text}</Text>
    </View>
  );
};

const Insurance = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.heading]}>Do you know?</Text>
      <ListItem text={"Government employes have Health Insurance"}></ListItem>
      <ListItem text={"Below poverty line have Health Insurance"}></ListItem>
      <ListItem text={"Some private employes have Health Insurance"}></ListItem>
      <ListItem text={"Rich people can take care themselves."}></ListItem>

      <Text style={[styles.text, { marginTop: 16, fontWeight: "700" }]}>
        But middle Class is just one bill away from crossing poverty line
        because of health insurance.
      </Text>
      <View style={styles.button}>
        <Text style={[styles.buttonText]}>Take Insurance</Text>
      </View>
    </View>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  heading: {
    color: "#0096FF",
    fontSize: 28,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 10,
  },
  text: {
    color: "#A4DDED",
  },
  bullet: {
    marginRight: 8,
    fontSize: 20,
    color: "#A4DDED",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    color: "#FFF",
  },
  button: {
    backgroundColor: "#0096FF",
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    borderRadius: 8,
    width: 220,
    alignSelf: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
