import { View, Text, Image, PermissionsAndroid } from "react-native";
import CommonText from "../../../components/CommonText";
import Button from "../../../components/button";
import { useEffect, useState } from "react";
import Contacts from "react-native-contacts";
import FullPage from "../full-page";
import { size } from "lodash";

const AddContacts = () => {
  const [text, onChangeText] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  const requestContactsPermission = async () => {};

  const openContacts = () => {
    console.log("aniContacts", Contacts);
    Contacts?.getAll().then((contacts) => {
      console.log("anicontacts", contacts);
      // contacts returned
    });
    // Contacts.openContactForm({})
    //   .then(contact => {
    //     if (contact) {
    //       setSelectedContact(contact);
    //     }
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  };

  useEffect(() => {
    console.log("aniselectedContact", selectedContact);
  }, [selectedContact]);

  const saveValidation = size(text) && size(phone) && size(email);

  return (
    <>
      <FullPage label="Add Friend" >
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
            onPress={requestContactsPermission}
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
          value={phone}
          type="numeric"
          onChange={setPhone}
          placeholder="Enter Phone Number"
          logo={require("../../../assets/phone.png")}
        />
        <CommonText
          value={email}
          onChange={setEmail}
          placeholder="Enter Email Id"
          logo={require("../../../assets/email.png")}
        />
        <View
        style={{marginTop: 250}}
        >
          <Button
            color={ saveValidation ? "green" : "#C7F6C7" }
            backgroundColor={ saveValidation ? "#C7F6C7" : "#1D1F24"}
            text={"Save Contacts"}
            width={"100%"}
            height={44}
            fontWeight="600"
            fontSize={18}
            borderColor={ saveValidation ? "" : "#C7F6C7" }
            onPress={requestContactsPermission}
          />
        </View>
      </FullPage>
    </>
  );
};

export default AddContacts;
