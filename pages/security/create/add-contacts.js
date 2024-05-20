import { View, Text, Image } from "react-native";
import CommonText from "../../../components/CommonText";
import Button from "../../../components/button";
import { useState } from "react";

const addContacts = () => {
  const [text, onChangeText] = useState("");

  return (
    <>
      <View style={{ marginTop: 26 }}>
        <Button
          color={"white"}
          backgroundColor={"#676D75"}
          text={"Add Existing Contacts"}
          // borderRadius={18}
          width={"100%"}
          height={44}
          fontWeight="600"
          fontSize={18}
        />
        <Text
          style={{
            color: "#676D75",
            fontWeight: "500",
            fontSize: 24,
            alignSelf: "center",
            marginTop: 26,
          }}
        >
          OR
        </Text>
      </View>
      <CommonText
        value={text}
        onChange={onChangeText}
        placeholder="Enter Name"
        logo={require("../../../assets/user.png")}
      />
      <CommonText
        value={text}
        onChange={onChangeText}
        placeholder="Enter Phone Number"
        logo={require("../../../assets/phone.png")}
      />
      <CommonText
        value={text}
        onChange={onChangeText}
        placeholder="Enter Email Id"
        logo={require("../../../assets/email.png")}
      />
    </>
  );
};

export default addContacts;
