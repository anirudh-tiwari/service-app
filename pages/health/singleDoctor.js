import { useRoute } from "@react-navigation/native";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Services from "./services";
import { useState } from "react";

const SingleDoctor = () => {
  const category = useRoute();
  const { name, doctorImg, desc } = category?.params;
  const daysList = getNextDays();
  const [activeTag, setActiveTag] = useState(daysList[0].key);
  const [timeTag, setTimeTag] = useState(timeList[0].key);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ height: "45%", width: "100%", backgroundColor: "white" }}>
        <Image
          source={doctorImg}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
        <View style={styles.curve} />
      </View>
      <TouchableOpacity
        style={[styles.navigation, { left: 24 }]}
        onPress={() => navigation.navigate("FoodList")}
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navigation,
          { right: 24, backgroundColor: "unset", borderWidth: 0 },
        ]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../../assets/profilePicBlue.png")}
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 24 }}>
        <View
          style={[
            {
              // flexDirection: "row",
              // justifyContent: "space-between",
              marginTop: -22,
            },
          ]}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontWeight: "800",
            }}
          >
            Dr. Anirudh
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#858585",
              fontWeight: "400",
              marginTop: 2,
            }}
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#404249",
            marginVertical: 16,
          }}
        ></View>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            fontWeight: "800",
          }}
        >
          Description
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#858585",
            fontWeight: "300",
            marginTop: 2,
          }}
        >
          Specialists here focus on {desc} Doctors collaborate closely with healthcare professionals.
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            fontWeight: "600",
            marginTop: 10,
            marginBottom: 6,
          }}
        >
          Select Date
        </Text>
        <Services
          listData={daysList}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />
        <Text
          style={{
            fontSize: 16,
            color: "white",
            fontWeight: "600",
            marginTop: 4,
            marginBottom: 6,
          }}
        >
          Select Time
        </Text>
        <Services
          listData={timeList}
          activeTag={timeTag}
          setActiveTag={setTimeTag}
        />
        <View style={[styles.container, { marginTop: 14, gap: 36 }]}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: "#AEAEAE",
                alignSelf: "center",
              }}
            >
              Price
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                color: "white",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                  color: "#0096FF",
                }}
              >
                रु{" "}
              </Text>
              300
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Success", { item: category?.params?.item })
            }
          >
            <Text style={[styles.buttonText]}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SingleDoctor;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "54%",
    borderRadius: 20,
    objectFit: "contain",
    resizeMode: "cover",
    marginTop: 88,
    borderRadius: 20,
    marginBottom: -40,
    overflow: "hidden",
  },
  curve: {
    width: "100%",
    height: "10%",
    backgroundColor: "black",
    opacity: 1,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    position: "relative",
    top: -34, // Adjust this value to control the curve position
  },
  navigation: {
    // borderWidth: 0.5,
    padding: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // backgroundColor: "#21262E",
    width: 40,
    height: 30,
    position: "absolute",
    top: 24,
  },
  bullet: {
    marginRight: 10,
    fontSize: 20,
    color: "#AEAEAE",
  },
  container: {
    flexDirection: "row",
    gap: 16,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#0096FF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 20,
    width: 220,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

function getNextDays() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const result = [];

  for (let i = 0; i < 20; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    result.push({
      name: dayOfWeek,
      key: String(dayOfMonth),
      date: String(dayOfMonth),
    });
  }

  return result;
}

const timeList = [
  { time: "08: 00 AM", key: "8AM" },
  { time: "09: 00 AM", key: "9AM" },
  { time: "10: 00 AM", key: "10AM" },
  { time: "11: 00 AM", key: "11AM" },
  { time: "12: 00 PM", key: "12PM" },
  { time: "01: 00 PM", key: "1PM" },
  { time: "02: 00 PM", key: "2PM" },
  { time: "03: 00 PM", key: "3PM" },
  { time: "04: 00 PM", key: "4PM" },
  { time: "05: 00 PM", key: "5PM" },
  { time: "06: 00 PM", key: "6PM" },
  { time: "07: 00 PM", key: "7PM" },
  { time: "08: 00 PM", key: "8PM" },
];
