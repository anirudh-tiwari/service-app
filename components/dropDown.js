import { size } from "lodash";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
  StyleSheet,
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
  const [dropdownDimensions, setDropdownDimensions] = useState({
    width: 0,
    top: 0,
    left: 0,
  });
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    if (clicked && dropdownRef.current) {
      setTimeout(() => {
        dropdownRef.current.measure((fx, fy, width, height, px, py) => {
          const spacing = type === 1 ? 2 : 7; // 2px space if type is 1, otherwise 6px
          setDropdownDimensions({
            width,
            top: py + height + spacing,
            left: px,
          });
        });
      }, 0);
    }
  }, [clicked, type]);

  const handleOutsidePress = () => {
    if (clicked) {
      setClicked(false);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={{ position: "relative", zIndex: clicked ? 10 : 0 }}>
          <TouchableOpacity
            ref={dropdownRef}
            style={[
              {
                width: type === 1 ? "100%" : "96%",
                height: type === 1 ? 50 : "auto",
                borderRadius: 10,
                alignSelf: type === 1 ? "center" : "auto",
                marginTop: type === 1 ? 24 : "auto",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: type === 1 ? "center" : "flex-start",
                paddingLeft: type === 1 ? 15 : 13,
                paddingRight: 15,
                marginLeft: type === 1 ? 0 : 6,
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
        </View>
      </TouchableWithoutFeedback>
      {clicked && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={clicked}
          onRequestClose={() => setClicked(false)}
        >
          <TouchableWithoutFeedback onPress={handleOutsidePress}>
            <View style={styles.modalOverlay}>
              <View
                style={[
                  styles.dropdownContainer,
                  {
                    top: dropdownDimensions.top,
                    left: dropdownDimensions.left,
                    width: dropdownDimensions.width,
                  },
                ]}
              >
                <ScrollView>
                  {data.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.dropdownItem,
                        size(data) - 1 === index
                          ? { borderBottomWidth: 0 }
                          : "",
                      ]}
                      activeOpacity={1}
                      onPress={() => {
                        onChange(item);
                        setClicked(false);
                        onSearch("");
                        setSearch("");
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{item.label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  dropdownContainer: {
    position: "absolute",
    maxHeight: 200,
    backgroundColor: "#1D1F24",
    borderRadius: 10,
    zIndex: 9999999,
    elevation: 5,
  },
  dropdownItem: {
    width: "85%",
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "black",
  },
  dropdownItemText: {
    fontWeight: "600",
    color: "white",
  },
});

export default Dropdown;
