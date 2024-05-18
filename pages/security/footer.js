import { View, TouchableOpacity, Image, Text } from "react-native";

const Footer = ({selectedTab, setSelectedTab}) => {
  return (
    <View style={{height: 64}}>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          height: "100%",
          bottom: 0,
          backgroundColor: "#1D1F24",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(0)}
        >
          <Image
            source={require("../../assets/track.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab === 0 ? "green" : "#676D75",
            }}
          />
          <Text
            style={{
              color: selectedTab === 0 ? "green" : "#676D75",
              marginTop: 5,
              fontWeight: 600
            }}
          >
            Track
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(1)}
        >
          <Image
            source={require("../../assets/shield.png")}
            style={{
              width: 28,
              height: 28,
              tintColor: selectedTab === 1 ? "#19A519" : "#676D75",
            }}
          />
          <Text
            style={{
              color: selectedTab === 1 ? "green" : "#676D75",
              marginTop: 5,
              fontWeight: 600
            }}
          >
            Safety
          </Text>
        </TouchableOpacity>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: selectedTab === 2 ? "#C7F6C7" : "#C7F6C7",
              borderRadius: 50,
              height: 70,
              width: 70,
              alignSelf: "center",
              position: "absolute",
              bottom: 12,
            }}
            activeOpacity={1}
            onPress={() => {}}
          >
            <Image
              source={require("../../assets/sos.png")}
              style={{ width: 38, height: 38, tintColor: "#19A519" }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(3)}
        >
          <Image
            source={require("../../assets/add.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedTab === 3 ? "green" : "#676D75",
            }}
          />
          <Text
            style={{
              color: selectedTab === 3 ? "green" : "#676D75",
              marginTop: 5,
              fontWeight: 600
            }}
          >
            Create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => setSelectedTab(4)}
        >
          <Image
            source={require("../../assets/helpline.png")}
            style={{
              width: 28,
              height: 28,
              tintColor: selectedTab === 4 ? "green" : "#676D75",
            }}
          />
          <Text
            style={{
              color: selectedTab === 4 ? "green" : "#676D75",
              marginTop: 5,
              fontWeight: 600,
              marginRight: 6
            }}
          >
            HelpLine
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
