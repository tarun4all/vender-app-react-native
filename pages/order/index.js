import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useQuery } from "@apollo/client";

import { GET_ALL_ORDERS_QUERY } from "../../sdk/graphqlPayloads/order";
import OrderCard from "./OrderCard";
import { sub } from "react-native-reanimated";

export default function Order({ navigation }) {
  const { data, loading, error } = useQuery(GET_ALL_ORDERS_QUERY);
  console.log({ data, loading, error: error });
  console.log(JSON.stringify(error, null, 2));
  return (
    <>
      {data?.getOrders?.map(
        (
          {
            description,
            category,
            quantity,
            subCategory,
            approxOrderValue,
            maxOrderValue,
          },
          i
        ) => (
          <OrderCard
            key={`order-card-${i}`}
            description={description}
            subCategory={subCategory}
            category={category}
            approxOrderValue={approxOrderValue}
            quantity={quantity}
            maxOrderValue={maxOrderValue}
          />
        )
      )}
    </>
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
});
