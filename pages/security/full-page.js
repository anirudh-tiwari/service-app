import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FullPage = ({ label, children }) => {
  navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#1D1F24", flex: 1 }}>
      <View style={styles.headerWrapper}>
        <View style={styles.container}>
          <View style={styles.container1}>
            <Text style={styles.heading}>{label}</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.goBack()}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}
          >
          <Image
            source={require("../../assets/circle.png")}
            style={{
              width: 32,
              height: 32
            }}
          />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyRadius}></View>
      <View
        style={{
          backgroundColor: "#1D1F24",
          flex: 1,
          paddingHorizontal: 16,
          marginTop: -70,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default FullPage;

const styles = StyleSheet.create({
  headerWrapper: {
    height: 102,
    // backgroundColor: "#98FF98",
    backgroundColor: "#C7F6C7",
    marginBottom: 12,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container1: {
    flexDirection: "row",
    gap: 10,
    marginTop: 18,
    marginLeft: 12,
  },
  header: {
    fontSize: 18,
    lineHeight: 18,
    color: "white",
    marginTop: 12,
    fontWeight: "600",
  },
  desc: {
    fontSize: 13,
    lineHeight: 18,
    color: "#F8F8FF",
    marginTop: 2,
  },
  container2: {
    marginLeft: 12,
  },
  heading: {
    color: "#19A519",
    fontSize: 26,
    fontWeight: "600",
  },
  bodyRadius: {
    borderRadius: 40,
    backgroundColor: "#1D1F24",
    height: 66,
    position: "relative",
    top: -40,
    zIndex: 0,
  },
});
