import { View, Text, Image, PermissionsAndroid } from "react-native";
import CommonText from "../../../components/CommonText";
import Button from "../../../components/button";
import { useEffect, useState } from "react";
import Contacts from "react-native-contacts";
import FullPage from "../full-page";

const AddContacts = () => {
  const [text, onChangeText] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  const requestContactsPermission = async () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: "Contacts",
      message: "This app would like to view your contacts.",
      buttonPositive: "Please accept bare mortal",
    })
      .then((res) => {
        console.log("Permission: ", res);
        console.log("aniContacts", Contacts);

        Contacts.openContactForm()
            .then((contacts) => {
                // work with contacts
                console.log(contacts);
            })
            .catch((e) => {
                console.log(e);
            });
      })
      .catch((error) => {
        console.error("Permission error: ", error);
      });
  };

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
          type="email"
          onChange={setEmail}
          placeholder="Enter Email Id"
          logo={require("../../../assets/email.png")}
        />
        <View
        style={{marginTop: 250}}
          // style={{ position: "absolute", bottom: 20, width: "100%", left: 16, zIndex:0 }}
        >
          <Button
            color={"green"}
            backgroundColor={"#C7F6C7"}
            text={"Save Contacts"}
            // borderRadius={18}
            width={"100%"}
            height={44}
            fontWeight="600"
            fontSize={18}
            onPress={requestContactsPermission}
          />
        </View>
      </FullPage>
    </>
  );
};

export default AddContacts;
