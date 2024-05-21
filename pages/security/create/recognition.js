import { Text, View } from "react-native";
import Button from "../../../components/button";
import FullPage from "../full-page";
import { Ionicons } from "@expo/vector-icons";

const Recognition = () => {
  return (
    <>
      <FullPage label="Voice Recognition">
        <View style={{ marginTop: 96 }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="mic-outline"
              size={170}
              style={{ marginTop: 2 }}
              color="#676D75"
            />
          </View>
          <View style={{  width: "100%", alignSelf: "center", marginTop: 24 }}>
            <Text style={{ fontSize: 15, lineHeight: 20, color: "white", textAlign: "center" }}>
              This recording will trigger an SOS to your loved ones, nearby
              police, and alert 10 nearby people.{" "}
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Button
              color={"green"}
              backgroundColor={"#C7F6C7"}
              text={"Please speak your safe word again"}
              width={"100%"}
              height={44}
              fontWeight="600"
              fontSize={18}
              onPress={() => {}}
            />
          </View>
        </View>
      </FullPage>
    </>
  );
};

export default Recognition;
