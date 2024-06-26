import { View, StyleSheet, TextInput, Image } from "react-native";

const CommonText = ({
  onChange = () => {},
  value = "",
  placeholder = "",
  type = "default",
  logo,
  secureTextEntry = false,
  onBlur,
  hasLogoColor = false,
  isTextArea = false,
}) => {
  return (
    <View style={styles.textStyle}>
      {logo ? (
        <Image
          source={logo}
          style={{
            width: 24,
            height: 24,
            marginRight: 8,
            tintColor: hasLogoColor ? "" : "#676D75",
          }}
        />
      ) : null}
      <TextInput
        // style={styles.input}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#676D75"
        style={{
          color: "white",
          width: "100%",
          height: isTextArea ? 120 : "auto",
          verticalAlign: isTextArea ? "top" : "auto",
        }}
      />
    </View>
  );
};

export default CommonText;

const styles = StyleSheet.create({
  textStyle: {
    borderWidth: 1,
    borderColor: "#676D75",
    // backgroundColor: "red",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: "100%",
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center", // Center from vertical position
  },
});
