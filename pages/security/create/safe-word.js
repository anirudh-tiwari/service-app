import { useState } from "react";
import { View, Text, Switch, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../../components/button";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { ContactDispatchers, ContactSelectors } from "../../../store/features/contact";

const SafeWord = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  navigation = useNavigation();
  const { safeWord } = ContactSelectors();
  const { setSafeWord } = ContactDispatchers();
  
  return (
    <View>
      <View style={styles.banner}>
        <Text style={styles.heading}>Safe Word activates SOS</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#C7F6C7" }}
          thumbColor={isEnabled ? "white" : "#f4f3f4"}
          style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.3 }] }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={[styles.banner, styles.inputContainer]}>
        <Text style={styles.heading2}>Type your Safe Word</Text>
        <TextInput
          onChangeText={setSafeWord}
          value={safeWord}
          style={styles.input}
          placeholder="Type Here..."
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.checkStyle}>
        <View style={{width:20}}>
        <Ionicons name="checkmark-outline" size={20} style={{marginTop:2}} color="white" />
        </View>
        <Text style={styles.checkLabel}>Your Safe Word should have at least 4 syllables.</Text>
      </View>
      <View style={styles.checkStyle}>
      <View style={{width:20}}>
        <Ionicons name="checkmark-outline" size={20} style={{marginTop:2}} color="white" />
        </View>
        <Text style={styles.checkLabel}>It should be distinctive, and not heard in common conversation.</Text>
      </View>
      <View style={styles.checkStyle}>
      <View style={{width:20}}>
        <Ionicons name="checkmark-outline" size={20} style={{marginTop:2}} color="white" />
        </View>
        <Text style={styles.checkLabel}>Safe Word should not contain Spaces.</Text>
      </View>
      <View style={{marginTop: 84}}></View>
      <Button
            color={size(safeWord) ? "green" : "#C7F6C7"}
            backgroundColor={size(safeWord) ? "#C7F6C7" : "#1D1F24"}
            text={"Train, Voice Recognition"}
            width={"100%"}
            height={44}
            fontWeight="600"
            fontSize={18}
            borderColor={size(safeWord) ? "" : "#C7F6C7"}
            onPress={() => navigation.navigate("Recognition")}
          />
    </View>
  );
};

export default SafeWord;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#676D75",
    width: "100%",
    height: 60,
    flexDirection: "row",
    gap: 24,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  heading: {
    fontSize: 18,
    color: "white",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 14,
    paddingVertical: 10,
    height: 90,
    gap: 10,
    marginBottom:34,
  },
  heading2: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1D1F24",
  },
  input: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
    width: "100%",
  },
  checkStyle: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 8,
  },
  checkLabel: {
    color: "white",
    fontSize: 15,
    lineHeight: 22,
    flexWrap: "wrap",
    flex:1
  }
});
