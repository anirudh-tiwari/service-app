import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { helpLine } from "./utils";
import { ContactSelectors } from "../../store/features/contact";

const Helpline = () => {
  return (
    <>
      <View
        style={{
          padding: 0,
          backgroundColor: "#1D1F24",
          height: 16,
          width: "100%",
        }}
      ></View>
      <ScrollView
        style={{
          flexGrow: 1,
          padding: 16,
          paddingVertical: 0,
          backgroundColor: "#1D1F24",
        }}
      >
        {helpLine.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </ScrollView>
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

export default Helpline;

const Cards = ({ item, index }) => {
  const { safeWord } = ContactSelectors();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        gap: 8,
        marginBottom: 16,
        backgroundColor: item.bgColor,
        height: 100,
        padding: 12,
        borderRadius: 20,
      }}
      activeOpacity={1}
      onPress={() => Linking.openURL(`tel:${item.number}`)}
    >
      <View
        style={{
          height: 40,
          flex: 2,
          alignSelf: "center",
        }}
      >
        <Image
          source={item.icon}
          style={{
            width: 46,
            height: "100%",
            objectFit: "fill",
            borderRadius: 12,
          }}
        />
      </View>
      <View
        style={{
          flex: 6,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            lineHeight: 22,
            color: item.color,
            marginBottom: 2,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "400",
            lineHeight: 18,
            color: item.color,
            marginBottom: 2,
          }}
        >
          {safeWord} + {item.safeWord}
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          marginTop: 14,
        }}
      >
        <Image
          source={require("../../assets/call.png")}
          style={{
            width: 34,
            height: 34,
            objectFit: "fill",
            alignSelf: "center",
            borderRadius: 12,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
