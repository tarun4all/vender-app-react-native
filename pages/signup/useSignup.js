import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../sdk/graphqlPayloads/user";

export default function useSignup() {
  const [doSignup, { loading, data, error }] = useMutation(SIGNUP);

  console.log(error?.message);
  if (error && error.message) {
    alert(error.message);
  }

  console.log(JSON.stringify(error, null, 2));
  return {
    loading,
    doSignup,
    data: data?.customerSignup,
  };
}
