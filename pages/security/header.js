import { View, Text, StyleSheet, Image } from "react-native";
import Gravatar from "../../components/gravatar";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/safe.png")}
          style={{
            width: 30,
            height: 30,
            //   tintColor: "green" :,
          }}
        />
        <Text style={styles.heading}>I'M SAFE</Text>
      </View>
      <Gravatar count={3} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    height: 110,
    backgroundColor: "#1D1F24",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  container: {
    flexDirection: "row",
    gap: 10,
    marginTop: 18,
    marginLeft: 12,
  },
  heading: {
    color: "#19A519",
    fontSize: 26,
    fontWeight: "600",
  },
});
