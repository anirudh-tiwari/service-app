import { View, Text, Image } from "react-native";
import Button from "../../../components/button";
import { useState } from "react";
import Freinds from './friends';

const Create = () => {
    const [activeState, setActiveState] = useState("friend");
  return (
    <>
      <View style={{ backgroundColor: "#1D1F24", flex: 1, paddingHorizontal:16 }}>
        <View style={{flexDirection: "row", gap: 16, marginTop: 16 }}>
          <Button
            text="Add Friend"
            color={ activeState === "friend" ? "green" : "#676D75" }
            backgroundColor={ activeState === "friend" ? "#C7F6C7" : "#1D1F24"}
            borderRadius={12}
            borderColor={ activeState === "friend" ? "#C7F6C7" : "#1D1F24"}
            height={40}
            fontWeight={ activeState === "friend" ? "800" : "500"}
            fontSize={16}
            width="48%"
            onPress={()=>setActiveState("friend")}
          />
          <Button
            text="Add Safe Word"
            color={ activeState === "safeWord" ? "green" : "#676D75" }
            backgroundColor={ activeState === "safeWord" ? "#C7F6C7" : "#1D1F24"}
            borderRadius={12}
            borderColor={ activeState === "safeWord" ? "#C7F6C7" : "#1D1F24"}
            height={40}
            fontWeight={ activeState === "safeWord" ? "700" : "600"}
            fontSize={16}
            width="48%"
            onPress={()=>setActiveState("safeWord")}
          />
        </View>
        <Freinds />
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

export default Create;
