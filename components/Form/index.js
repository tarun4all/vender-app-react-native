import React, { useEffect, useState } from "react";
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
import { Formik } from "formik";

export default function FormWrapper({
  inputs,
  initialValues = {},
  onSubmit,
  onChange,
  submitLabel,
  children,
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ handleChange, values, handleSubmit }) => (
              <>
                {inputs.map(({ id, placeholder, secureTextEntry }) => (
                  <Input
                    key={`form-${id}`}
                    placeholder={placeholder}
                    name={id}
                    secureTextEntry={secureTextEntry}
                    onChangeText={handleChange(id)}
                    value={values[id]}
                  />
                ))}
                <Button
                  onPress={handleSubmit}
                  title={`${submitLabel || "Submit"}`}
                />
              </>
            )}
          </Formik>
          {children}
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: "40%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
