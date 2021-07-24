import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormWrapper from "../../components/Form";

const inputs = [
  {
    placeholder: "Max Order Value",
    id: "maxOrderValue",
  },
  {
    placeholder: "Category",
    id: "category",
  },
  {
    placeholder: "Sub Category",
    id: "subCategory",
  },
  {
    placeholder: "Description",
    id: "description",
  },
  {
    placeholder: "Quantity",
    id: "quantity",
  },
  {
    placeholder: "Approx Order Value",
    id: "approxOrderValue",
  },
];

export default function CreateOrder({ navigation }) {
  return (
    <>
      <FormWrapper
        inputs={inputs}
        submitLabel="Create Order"
        initialValues={{
          maxOrderValue: "",
          category: "",
          subCategory: "",
          description: "",
          quantity: "",
          approxOrderValue: "",
        }}
        onSubmit={(values) => {
          console.log("blah blah >> ", values);
        }}
      />
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
