import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Doctor = () => {
  const category = useRoute();
  const { doctorImg, name, hospitalName } = category?.params;

  navigation = useNavigation();

  return (
    <>
      <View style={styles.wrapper}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            marginTop: 16,
            marginBottom: 20,
          }}
        >
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 24,
              color: "white",
              lineHeight: 24,
            }}
          >
            My Appointment
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            width: "100%",
            marginRight: 14,
            backgroundColor: "#252A32",
            marginBottom: 20,
            height: 120,
          }}
          onPress={() => {}}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              padding: 10,
              flexDirection: "row",
              gap: 14,
            }}
          >
            <Image
              source={doctorImg}
              style={{
                width: "34%",
                height: "100%",
                borderRadius: 0,
                objectFit: "contain",
                borderRadius: 20,
                backgroundColor: "white",
              }}
            />
            <View style={{ width: "60%" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "white",
                  marginBottom: 4,
                }}
              >
                Dr. Anirudh Tiwari
              </Text>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#404249",
                  marginVertical: 6,
                }}
              ></View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "white",
                  marginBottom: 4,
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#858585",
                  fontWeight: "400",
                }}
              >
                {hospitalName}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={[styles.text]}>Schedule Appointment</Text>
        <Text style={[styles.text2]}>Today, December 22, 2024</Text>
        <Text style={[styles.text2]}>06:00 PM</Text>
        <Text style={[styles.text, { marginTop: 16 }]}>
          Patient Information
        </Text>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={{ width: "30%" }}>
            <Text style={[styles.text2]}>Full Name </Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={[styles.text2, { width: "60%" }]}>: {" "} Ramesh Jha</Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row", marginTop:4 }}>
          <View style={{ width: "30%" }}>
            <Text style={[styles.text2]}>Gender </Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={[styles.text2, { width: "60%" }]}>: {" "} Male</Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row", marginTop:4 }}>
          <View style={{ width: "30%" }}>
            <Text style={[styles.text2]}>Age </Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={[styles.text2, { width: "60%" }]}>: {" "} 26</Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row", marginTop:4 }}>
          <View style={{ width: "30%" }}>
            <Text style={[styles.text2]}>Contact </Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={[styles.text2, { width: "60%" }]}>: {" "} (91) 123-4567</Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row", marginTop:4 }}>
          <View style={{ width: "30%" }}>
            <Text style={[styles.text2]}>Age </Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={[styles.text2, { width: "60%" }]}>: {" "} 26</Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row", marginTop:4 }}>
          <View style={{ width: "30%" }}>
            <Text style={[styles.text2]}>Problem </Text>
          </View>
          <View style={{ width: "100%" }}>
            <Text style={[styles.text2, { width: "71%" }]}>
              <Text>: {" "}</Text>
              <Text>This Problem is {name} Doctors collaborate closely with healthcare
              professionals.</Text>
            </Text>
          </View>
        </View>
        <View style={{ width: "100%", flexDirection: "row", marginTop:4 }}>
          <View style={{ width: "30%" }}>
            <Text style={[styles.text2]}>Notes </Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={[styles.text2, { width: "100%" }]}>- Please arrive 15 minutes early</Text>
            <Text style={[styles.text2, { width: "100%" }]}>- Bring your insurance card</Text>
          </View>
        </View>
        <View style={styles.action}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={[styles.buttonText]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.button2]}
            onPress={() => navigation.navigate("Health")}
          >
            <Text style={[styles.buttonText, styles.buttonText2]}>
              Reschedule
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    paddingHorizontal: 14,
    flex: 1,
  },
  HeaderWrapper: {
    flexDirection: "row",
    marginVertical: 16,
    gap: 10,
  },
  header: {
    color: "white",
    fontSize: 24,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginBottom: 4,
  },
  text2: {
    fontSize: 14,
    fontWeight: "600",
    color: "#858585",
    marginBottom: 4,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    color: "#858585",
    justifyContent: "center",
    alignItems: "center",
    height: 46,
    borderRadius: 12,
    width: "44%",
    // position: "absolute",
    // bottom: 30,
    left: 24,
  },
  button2: {
    width: "48%",
    borderColor: "#0096FF",
    backgroundColor: "#0096FF",
    color: "#0096FF",
    // bottom: 94,
  },
  buttonText: {
    color: "#858585",
    fontSize: 16,
  },
  buttonText2: {
    color: "white",
  },
  action: {
    width: "100%",
    flexDirection: "row",
    // gap: 12,
    position: "absolute",
    bottom: 30,
  },
});
