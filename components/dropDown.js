import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

const Dropdown = ({
  options,
  placeHolder = "Select...",
  selected,
  onChange,
  type = 1,
}) => {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(options);
  const searchRef = useRef();

  const onSearch = (search) => {
    if (search !== "") {
      const tempData = options.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      );
      setData(tempData);
    } else {
      setData(options);
    }
  };

  useEffect(() => {
    setData(options);
  }, [options]);

  const handleOutsidePress = () => {
    if (clicked) {
      setClicked(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={{ position: "relative", zIndex: clicked ? 10 : 0 }}>
        <TouchableOpacity
          style={[
            {
              width: type === 1 ? "100%" : "96%",
              height: type == 1 ? 50 : "auto",
              borderRadius: 10,
              alignSelf: type == 1 ? "center" : "auto",
              marginTop: type == 1 ? 24 : "auto",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: type == 1 ? "center" : "flex-start",
              paddingLeft: type == 1 ? 15 : 13,
              paddingRight: 15,
              marginLeft: type == 1 ? 0 : 6,
            },
            type === 1
              ? { borderWidth: 1, borderColor: "#676D75" }
              : type === 2 &&
                clicked && {
                  borderWidth: 1,
                  borderColor: "#676D75",
                  paddingTop: 10,
                  marginTop: -10,
                  paddingBottom: 10,
                  marginBottom: -10,
                },
          ]}
          activeOpacity={1}
          onPress={() => {
            setClicked(!clicked);
          }}
        >
          <Text
            style={
              type === 1
                ? {
                    fontWeight: "400",
                    color: selected ? "white" : "#676D75",
                    zIndex: 0,
                  }
                : {
                    color: "#FFFFFF",
                    fontSize: 20,
                    marginLeft: 0,
                    fontWeight: "500",
                  }
            }
          >
            {selected ? selected.label : placeHolder}
          </Text>
          {type === 1 ? (
            <Image
              source={
                clicked
                  ? require("../assets/upload.png")
                  : require("../assets/dropdown.png")
              }
              style={{
                width: 20,
                height: 20,
                tintColor: selected ? "white" : "#676D75",
              }}
            />
          ) : (
            <Image
              source={require("../assets/edit.png")}
              style={
                clicked
                  ? { opacity: 0, width: 20, height: 20 }
                  : {
                      width: 20,
                      height: 20,
                      marginTop: 4,
                      tintColor: selected ? "white" : "#676D75",
                    }
              }
            />
          )}
        </TouchableOpacity>
        {clicked && (
          <View
            style={{
              elevation: 5,
              position: "absolute",
              top: type === 1 ? 80 : 45,
              left: type === 1 ? 0 : 4,
              maxHeight: 200,
              alignSelf: type === 1 ? "center" : "flex-start",
              width: type === 1 ? "100%" : "96%",
              backgroundColor: "#1D1F24",
              borderRadius: 10,
              zIndex: 9999999,
            }}
          >
            <ScrollView>
              {data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: "85%",
                    alignSelf: "center",
                    height: 50,
                    justifyContent: "center",
                    borderBottomWidth: 0.5,
                    borderColor: "black",
                  }}
                  activeOpacity={1}
                  onPress={() => {
                    onChange(item);
                    setClicked(false);
                    onSearch("");
                    setSearch("");
                  }}
                >
                  <Text style={{ fontWeight: "600", color: "white" }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Dropdown;
