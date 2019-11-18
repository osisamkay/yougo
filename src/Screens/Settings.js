import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Buttons from "../Components/Buttons";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"This is the settings screen"</Text>
      <Buttons
        title="back to home screen "
        handlePress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold"
  }
});
