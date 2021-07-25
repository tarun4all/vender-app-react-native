import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ORDER } from "../../sdk/graphqlPayloads/order";

export default function useCreateOrder() {
  const [createOrder, { loading, data, error }] = useMutation(CREATE_ORDER);

  console.log(error?.message);
  if (error && error.message) {
    alert(error.message);
  }

  //   console.log(JSON.stringify(error, null, 2));
  return {
    loading,
    createOrder,
    data: data?.createOrder,
  };
}
