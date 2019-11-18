import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Buttons from "../Components/Buttons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"This is the home screen"</Text>
      <Buttons
        title="go to settings"
        handlePress={() => {
          navigation.navigate("Settings");
        }}
      />
    </View>
  );
};

export default Home;

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
