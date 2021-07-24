import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

import FormWrapper from "../../components/Form";
import OverlayLoader from "../../components/OverlayLoader";

import useSignup from "./useSignup";

const inputs = [
  {
    placeholder: "First Name",
    id: "firstName",
  },
  {
    placeholder: "Last Name",
    id: "lastName",
  },
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
export default function Signup({ navigation }) {
  const { loading, doSignup, data } = useSignup();

  useEffect(() => {
    if (data) {
      console.log("register");
      alert("Account created succesfully, Please login");
      navigation.navigate("Login");
    }
  }, [data]);

  if (loading) return <OverlayLoader />;
  return (
    <>
      <FormWrapper
        inputs={inputs}
        submitLabel="Signup"
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log("blah blah >> ", values);
          doSignup({ variables: { ...values, gender: "MALE", age: 25 } });
        }}
      >
        <View style={styles.anotherLink}>
          <Text>Already have an account ?</Text>
          <Button
            onPress={() => navigation.navigate("Login")}
            title="Login here"
            type="clear"
          />
        </View>
      </FormWrapper>
    </>
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
