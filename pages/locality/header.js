import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  navigation = useNavigation();

  return (
    <View style={{ marginBottom: 18 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.container1}>
          <Text style={styles.header}>Local Voice,</Text>
          <Text style={styles.description}>North East, Delhi</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="notifications" size={28} color="#E23288" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    color: "white",
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    color: "#858585",
    fontWeight: "400",
    marginTop: 2,
  },
  container1: {
    flex: 10,
  },
});
