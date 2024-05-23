import { SafeAreaView, View, Text, Switch, StyleSheet, TextInput } from "react-native";
import Button from "../../../components/button";
import { size } from "lodash";
import { useState } from "react";
import TimePicker from "../../../components/timePicker";
import FullPage from "../full-page";

const Safety = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedMinute, setSelectedMinute] = useState('00');
  const [selectedPeriod, setSelectedPeriod] = useState('AM');

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  const handleMinuteChange = (minute) => {
    setSelectedMinute(minute);
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const safeWord = [1,2];

  return (
    <FullPage label="Set Safety Check">
    <View>
    <View style={styles.banner}>
      <Text style={styles.heading}>Repeat</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#C7F6C7" }}
        thumbColor={isEnabled ? "white" : "#f4f3f4"}
        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.3 }] }}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
    {/* <View style={[styles.banner, styles.inputContainer]}>
      <Text style={styles.heading2}>Type your Safe Word</Text>
    </View> */}
    {/* TIME  */}
    <SafeAreaView style={[styles.banner, styles.inputContainer]}>
      <Text style={styles.heading}>Select Time</Text>
      <TimePicker 
        onHourChange={handleHourChange} 
        onMinuteChange={handleMinuteChange} 
        onPeriodChange={handlePeriodChange} 
      />
    </SafeAreaView>
    {/* TIME END  */}
    <View style={{marginTop: 200}}></View>
    <Button
          color={size(safeWord) ? "green" : "#C7F6C7"}
          backgroundColor={size(safeWord) ? "#C7F6C7" : "#1D1F24"}
          text={"Add"}
          width={"100%"}
          height={44}
          fontWeight="600"
          fontSize={18}
          borderColor={size(safeWord) ? "" : "#C7F6C7"}
          onPress={() => navigation.navigate("Recognition")}
        />
  </View>
  </FullPage>
  )
}

export default Safety

const styles = StyleSheet.create({
    banner: {
      backgroundColor: "#676D75",
      width: "100%",
      height: 60,
      flexDirection: "row",
      gap: 24,
      borderRadius: 16,
      alignItems: "center",
      marginTop: 24,
      paddingHorizontal: 16,
      justifyContent: "space-between"
    },
    heading: {
      fontSize: 20,
      color: "white",
      fontWeight: "600",
    },
    inputContainer: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: 14,
      paddingVertical: 10,
      height: 248,
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
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#676D75',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "white"
      },
  });