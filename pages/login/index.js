import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

import FormWrapper from "../../components/Form";
import useLogin from "./useLogin";
import OverlayLoader from "../../components/OverlayLoader";

//services
import { setItem } from "../../services/storage";

const inputs = [
  {
    placeholder: "Email ID",
    id: "email",
  },
  {
    secureTextEntry: true,
    placeholder: "Password",
    id: "password",
  },
];

export default function Login({ navigation }) {
  const { loading, doLogin, data } = useLogin();

  useEffect(() => {
    if (data?.token) {
      setItem("auth", data?.token).then(() => {
        navigation.navigate("Order");
      });
    }
  }, [data]);

  if (loading) return <OverlayLoader />;

  return (
    <>
      <FormWrapper
        inputs={inputs}
        submitLabel="Login"
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log({ values });
          doLogin({ variables: { ...values } });
        }}
      >
        <View style={styles.anotherLink}>
          <Text>Don't have an account ?</Text>
          <Button
            onPress={() => navigation.navigate("Signup")}
            title="Signup here"
            type="clear"
          />
        </View>
      </FormWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  anotherLink: {
    flexDirection: "row",
    alignItems: "center",
  },
});
