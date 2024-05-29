import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import Dropdown from "../../components/dropDown";
import { Ionicons } from "@expo/vector-icons";
import CommonText from "../../components/CommonText";

const Create = () => {
  const image = useRoute();
  const { img } = image?.params;
  const [type, setType] = useState(null);
  const [list, setList] = useState(null);
  const [text, onChangeText] = useState("");

  const handleTypeChange = (selectedType) => {
    console.log('aniselectedType',selectedType);
    setType(selectedType);
    setList(null); // Reset the second dropdown
  };


  return (
    <>
      <View style={styles.header}>
        <Ionicons name="chevron-back-outline" size={24} color="white" />
        <Text style={styles.issueText}>New Issue</Text>
        <Text style={styles.shareText}>Share</Text>
      </View>
      <View style={styles.createWrapper}>
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: img }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 0,
              objectFit: "fill",
              borderRadius: 20,
            }}
          />
          <Dropdown
            options={issueType}
            selected={type}
            onChange={(value) => handleTypeChange(value)}
            placeholder="Select Issue Type"
          />
          {type && (
            <Dropdown
              options={issuesList[type.key]}
              selected={list}
              placeholder="Select Specific Issue"
              onChange={(value) => setList(value)}
            />
          )}
          <CommonText
          value={text}
          onChange={onChangeText}
          placeholder="Enter Famous Location Name"
          logo={require("../../assets/map3.png")}
          hasLogoColor={true}
        />
        </View>
      </View>
    </>
  );
};

export default Create;

const styles = StyleSheet.create({
  createWrapper: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  cardContainer: {
    borderRadius: 20,
    width: "100%",
    marginRight: 14,
    marginTop: 10,
    backgroundColor: "#252A32",
    marginBottom: 20,
    height: "auto",
    padding: 12,
    paddingBottom: 16,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: "#252A32",
    backgroundColor: "black",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  issueText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  shareText: {
    fontSize: 16,
    color: "#0073aa",
    fontWeight: "800",
  },
});

const issueType = [
  { key: "infrastructure_issues", label: "Infrastructure Issues" },
  { key: "social_issues", label: "Social Issues" },
  { key: "environmental_issues", label: "Environmental Issues" },
  { key: "public_services", label: "Public Services" },
  { key: "safety_issues", label: "Safety Issues" },
  { key: "health_issues", label: "Health Issues" },
  { key: "transportation_issues", label: "Transportation Issues" },
];

const issuesList = {
  infrastructure_issues: [
    { key: "potholes", label: "Potholes" },
    { key: "road_damage", label: "Road Damage (e.g., cracks, sinking)" },
    { key: "broken_streetlights", label: "Broken Streetlights" },
    { key: "traffic_signal_problems", label: "Traffic Signal Problems" },
    { key: "water_supply_issues", label: "Water Supply Issues" },
    { key: "drainage_problems", label: "Drainage Problems" },
  ],
  social_issues: [
    { key: "noise_complaints", label: "Noise Complaints" },
    { key: "public_nuisances", label: "Public Nuisances" },
    { key: "vandalism", label: "Vandalism" },
    { key: "homelessness", label: "Homelessness" },
  ],
  environmental_issues: [
    { key: "waste_management_problems", label: "Waste Management Problems" },
    { key: "illegal_dumping", label: "Illegal Dumping" },
    { key: "pollution", label: "Pollution" },
    { key: "water_contamination", label: "Water Contamination" },
  ],
  public_services: [
    {
      key: "inefficient_public_transport",
      label: "Inefficient Public Transport",
    },
    {
      key: "poor_public_healthcare_services",
      label: "Poor Public Healthcare Services",
    },
    {
      key: "inadequate_educational_facilities",
      label: "Inadequate Educational Facilities",
    },
  ],
  safety_issues: [
    { key: "crime_and_vandalism", label: "Crime and Vandalism" },
    {
      key: "street_safety",
      label: "Street Safety (e.g., dangerous intersections)",
    },
    { key: "fire_hazards", label: "Fire Hazards" },
    { key: "unsafe_buildings", label: "Unsafe Buildings" },
    { key: "lack_of_street_lighting", label: "Lack of Street Lighting" },
  ],
  health_issues: [
    { key: "pest_infestations", label: "Pest Infestations" },
    { key: "disease_outbreaks", label: "Disease Outbreaks" },
    { key: "sanitation_issues", label: "Sanitation Issues" },
    { key: "lack_of_medical_facilities", label: "Lack of Medical Facilities" },
    { key: "poor_air_quality", label: "Poor Air Quality" },
  ],
  transportation_issues: [
    { key: "public_transport_delays", label: "Public Transport Delays" },
    { key: "traffic_congestion", label: "Traffic Congestion" },
    { key: "parking_issues", label: "Parking Issues" },
    { key: "road_safety", label: "Road Safety" },
  ],
};
