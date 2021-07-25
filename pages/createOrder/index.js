import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import FormWrapper from "../../components/Form";
import useCreateOrder from "./useCreateOrder";
import OverlayLoader from "../../components/OverlayLoader";

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
    placeholder: "Approx Order Value",
    id: "approxOrderValue",
  },
];

export default function CreateOrder({ navigation }) {
  const { createOrder, loading, data, error } = useCreateOrder();

  console.log({ loading, data, error });
  console.log("error explained >> ", JSON.stringify(error, null, 2));
  useEffect(() => {
    if (data) {
      alert("Order Created succesfully.");
      navigation.navigate("Dashboard");
    }
  }, [data]);

  if (loading) return <OverlayLoader />;

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
          approxOrderValue: "",
        }}
        onSubmit={(values) => {
          console.log("blah blah >> ", values);
          createOrder({ variables: { ...values, quantity: 10 } });
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
