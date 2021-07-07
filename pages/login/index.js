import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, Input } from "react-native-elements";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri:
            "https://icons-for-free.com/iconfiles/png/512/bob+minion+despicable+me+minion+icon-1320166696111352423.png",
        }}
      />
      <Input placeholder="Email ID" />
      <Input placeholder="Password" />
      <Button title="Login" />
      <View style={styles.anotherLink}>
        <Text>Don't have an account ?</Text>
        <Button
          onPress={() => navigation.navigate("Signup")}
          title="Signup here"
          type="clear"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputDiv: {
    width: "80%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  anotherLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: "70%",
    height: "20%",
  },
});
