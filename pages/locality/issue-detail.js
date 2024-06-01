import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const issueDetail = {
  id: 1,
  title: "Large Pothole",
  description:
    "This pothole has been causing traffic issues and minor accidents for the past few weeks. It needs urgent repair.",
  location: "Main Street, City Center",
  image: require("../../assets/pathole2.jpg"), // Replace with the path to your image
  dateReported: "2024-05-10T08:30:00Z",
  status: "In Progress",
  assignedWorkers: [
    {
      id: 1,
      name: "Worker One",
      contact: "9910231951",
      image: require("../../assets/avinash.jpeg"),
    },
    {
      id: 2,
      name: "Worker Two",
      contact: "8373934787",
      image: require("../../assets/anurag.jpeg"),
    },
  ],
  createdBy: "Anirudh Tiwari",
};

const currentUser = "Anirudh Tiwari";

const IssueDetail = () => {
  const cardData = useRoute();
   const {image, name, description, location} = cardData?.params?.item;

  const renderWorkerItem = ({ item }) => (
    <View style={styles.workerCard}>
      <Image source={item.image} style={styles.workerImage} />
      <View style={styles.workerInfo}>
        <Text style={styles.workerName}>{item.name}</Text>
        {currentUser === issueDetail.createdBy && (
          <Text style={styles.workerContact}>Contact: {item.contact}</Text>
        )}
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.contact}`)}>
        <Image
          source={require("../../assets/call.png")}
          style={{
            width: 34,
            height: 34,
            objectFit: "fill",
            alignSelf: "center",
            borderRadius: 12,
            tintColor: "gray",
          }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Issue Details</Text>
      </View>
      <Image source={image} style={styles.issueImage} />
      <View style={styles.detailsContainer}>
        <View style={styles.label}>
          <Text style={styles.title}>{name}</Text>
          <TouchableOpacity
            style={{
              width: 92,
              height: 26,
              paddingVertical: 0,
              paddingHorizontal: 0,
              backgroundColor: "#FFFBC7",
              marginTop: -6,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#FFFBC7",
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 15,
                color: "#67611B",
              }}
            >
              {"In Progress"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.locationWrapper}>
          <Image
            source={require("../../assets/map3.png")}
            style={styles.locationImg}
          />
          <Text style={styles.location}>{location}</Text>
        </View>
        {/* <Text style={styles.dateReported}>
          Reported on: {new Date(issueDetail.dateReported).toLocaleDateString()}
        </Text> */}
        <Text style={styles.assignedWorkersTitle}>Assigned Workers:</Text>
        <Text style={styles.info}>
          Contacts Information will show only to the person who created this
          issue.
        </Text>
        <FlatList
          data={issueDetail.assignedWorkers}
          renderItem={renderWorkerItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.workerList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#252A32",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },
  issueImage: {
    width: "100%",
    height: 200,
    objectFit: "fill",
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 8,
  },
  locationWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginVertical: 8,
  },
  location: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  dateReported: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    color: "gray",
    marginBottom: 16,
  },
  assignedWorkersTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 1,
  },
  workerList: {
    paddingVertical: 10,
  },
  workerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
    marginBottom: 14,
  },
  workerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  workerInfo: {
    flex: 1,
  },
  workerName: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  workerContact: {
    fontSize: 14,
    color: "gray",
  },
  locationImg: {
    height: 22,
    width: 22,
  },
  info: {
    fontSize: 14,
    color: "#676D75",
    fontWeight: "500",
    marginBottom: 6,
  },
  label: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    // justifyContent: "center",
    alignItems: "center",
  },
});

export default IssueDetail;
