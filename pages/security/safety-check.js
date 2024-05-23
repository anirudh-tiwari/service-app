import { View, Text, Image, Switch, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { ContactDispatchers, ContactSelectors } from "../../store/features/contact";
import { size } from "lodash";

const SafetyCheck = () => {
  navigation = useNavigation();
  const { safetyCheckList } = ContactSelectors();
  const { updateSafetyCheck } = ContactDispatchers();

  const toggleChange = (val, index) => {
    const updatedList = safetyCheckList.map((data, idx) => {
      if(idx === index ){
        return {...data, isEnabled: val};
      }
      return data;
    } )
    updateSafetyCheck(updatedList);
  };

  return (
    <>
      <View
        style={{ backgroundColor: "#1D1F24", flex: 1, paddingHorizontal: 16 }}
      >
        <>
          {size(safetyCheckList) ? (
            <View style={{ marginTop: 10 }}>
              {safetyCheckList.map((data, index) => {
                return (
                  <View style={styles.safetyCheckBanner} key={index}>
                    <View>
                      <Text style={styles.safetyCheckHeading}>Once</Text>
                      <Text style={styles.safetyCheckLabel}>
                        {data.selectedHour}:{data.selectedMinute}{" "}
                        {data.selectedPeriod}
                      </Text>
                    </View>
                    <View>
                      <Switch
                        trackColor={{ false: "#767577", true: "#C7F6C7" }}
                        thumbColor={data.isEnabled ? "white" : "#f4f3f4"}
                        style={{
                          transform: [{ scaleX: 1.4 }, { scaleY: 1.3 }],
                        }}
                        onValueChange={(val) => toggleChange(val,index)}
                        value={data.isEnabled}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          ) : (
            <>
              <View
                style={{
                  marginTop: 64,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/checklist.png")}
                  style={{
                    height: 210,
                    objectFit: "contain",
                  }}
                />
              </View>
              <Text
                style={{
                  color: "#F5FEFD",
                  alignSelf: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  width: "100%",
                  marginTop: 16,
                  fontSize: 14,
                  lineHeight: 18,
                }}
              >
                Set up Safety Checks and we'll prompt you to enter your PIN at
                selected times. Let your emergency contacts know you're safe.
                We'll activate SOS if you're not.
              </Text>
              <View
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "72%",
                  marginTop: 18,
                }}
              >
                <Button
                  color={"#19A519"}
                  backgroundColor={"#C7F6C7"}
                  text={"Set Safety Checks"}
                  borderRadius={18}
                  width={"100%"}
                  height={40}
                  fontWeight="600"
                  fontSize={18}
                  onPress={() => navigation.navigate("Safety")}
                />
              </View>
            </>
          )}
          {size(safetyCheckList) ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("Safety")}
              style={{ position: "absolute", right: 20, bottom: 20, width: 60 }}
            >
              <Image
                source={require("../../assets/plus.png")}
                style={{
                  height: 50,
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </TouchableOpacity>
          ) : null}
        </>
      </View>
      <View
        style={{
          padding: 0,
          backgroundColor: "black",
          height: 12,
          width: "100%",
        }}
      ></View>
    </>
  );
};

export default SafetyCheck;

const styles = StyleSheet.create({
  safetyCheckBanner: {
    backgroundColor: "#676D75",
    height: 100,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16
  },
  safetyCheckHeading: {
    fontSize: 17,
    color: "#1D1F24",
    fontWeight: "500",
  },
  safetyCheckLabel: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1D1F24",
    // marginTop: 2,
  },
});
