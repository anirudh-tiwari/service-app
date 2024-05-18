import { View, Text, StyleSheet, Image } from "react-native";
import Gravatar from "../../components/gravatar";

const Header = ({list}) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.container}>
      <View style={styles.container1}>
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
      <View style={styles.container2}>
      <Text style={styles.header}>{list.name}</Text>
      <Text style={styles.desc}>{list.desc}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerWrapper: {
    height: 112,
    backgroundColor: "#1D1F24",
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
   lineHeight:18,
   color: "white",
   marginTop:12,
   fontWeight:"600"
  },
  desc: {
    fontSize: 13,
    lineHeight:18,
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
});
