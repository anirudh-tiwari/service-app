import { View, Text, StyleSheet, Image } from "react-native";
import Gravatar from "../../components/gravatar";
import { ContactSelectors } from "../../store/features/contact";
import { size } from "lodash";

const Header = ({ list }) => {
  const { contactList } = ContactSelectors();

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
        {size(contactList) ? (
          <Gravatar count={size(contactList) - 1} />
        ) : (
          <Image
            source={require("../../assets/addFriend.png")}
            style={{
              height: 26,
              objectFit: "contain",
              width: 26,
              backgroundColor: "#C7F6C7",
              borderRadius: 6,
              marginTop: 22,
              marginRight: 16,
            }}
          />
        )}
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
});
