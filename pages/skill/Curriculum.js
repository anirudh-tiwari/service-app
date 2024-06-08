import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { curriculum } from "./utils";
import Dropdown from "../../components/dropDown";

const classType = [
  { key: "class6", label: "Class 6" },
  { key: "class7", label: "Class 7" },
  { key: "class8", label: "Class 8" },
  { key: "class9", label: "Class 9" },
  { key: "class10", label: "Class 10" },
  { key: "class11", label: "Class 11" },
  { key: "class12", label: "Class 12" },
];

const Curriculum = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const classCurriculum = curriculum["class6"];
  const [type, setType] = useState({ key: "class6", label: "Class 6" });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.header}
        activeOpacity={1}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
        <Dropdown
          options={classType}
          selected={type}
          onChange={(value) => setType(value)}
          placeHolder="ss"
          type={2}
        />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {classCurriculum.chapters.map((chapter, index) => (
          <View key={index} style={styles.chapter}>
            <Text style={styles.chapterTitle}>
              {index + 1}. {chapter.title}
            </Text>
            {chapter.topics.map((topic, subIndex) => (
              <View key={subIndex} style={styles.topic}>
                <Ionicons
                  name="caret-forward-circle-outline"
                  size={34}
                  color="#f69722"
                  style={styles.icon}
                />
                <View style={styles.topicTextContainer}>
                  <Text style={styles.topicTitle}>
                    {index + 1}.{subIndex + 1} {topic.chapter}
                  </Text>
                  <Text style={styles.topicDesc}>{topic.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1F1F1F",
    height: 62,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "500",
  },
  scrollContent: {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 14,
  },
  chapter: {
    marginTop: 14,
    backgroundColor: "#2A2A2A",
    borderRadius: 10,
    padding: 15,
  },
  chapterTitle: {
    fontSize: 20,
    color: "#f69722",
    fontWeight: "bold",
    marginBottom: 10,
  },
  topic: {
    flexDirection: "row",
    backgroundColor: "#1F1F1F",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  topicTextContainer: {
    marginLeft: 2,
    flex: 1,
  },
  topicTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  topicDesc: {
    color: "#AAAAAA",
    fontSize: 14,
  },
  icon: {
    marginRight: 10,
  },
  footer: {
    padding: 16,
    backgroundColor: "#1F1F1F",
  },
  buyButton: {
    backgroundColor: "#f69722",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#FBBF24",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Curriculum;
