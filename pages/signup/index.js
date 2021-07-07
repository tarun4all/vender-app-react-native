import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Input } from "react-native-elements";

export default function Signup({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Input style={styles.input} placeholder="First Name" />
          <Input placeholder="Middle Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Mobile No." />
          <Input placeholder="Email ID" />
          <Input placeholder="Password" />
          <Button title="Signup" />
          <View style={styles.anotherLink}>
            <Text>Already have an account ?</Text>
            <Button
              onPress={() => navigation.navigate("Login")}
              title="Login here"
              type="clear"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: "80%",
    height: "10%",
  },
  anotherLink: {
    flexDirection: "row",
    alignItems: "center",
  },
});
