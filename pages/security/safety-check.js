import { View, Text, Image } from "react-native";
import Button from "../../components/button";
import Safety from "./create/safety";
import { useState } from "react";

const SafetyCheck = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <View style={{ backgroundColor: "#1D1F24", flex: 1, paddingHorizontal: 16 }}>
        {isOpen ? (
          <Safety />
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
                onPress={() => setIsOpen(true)}
              />
            </View>
          </>
        )}
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
