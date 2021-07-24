import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../../sdk/graphqlPayloads/user";

export default function useLogin() {
  const [doLogin, { loading, data, error }] = useLazyQuery(LOGIN);

  console.log(error?.message);
  if (error && error.message) {
    alert(error.message);
  }

  //   console.log(JSON.stringify(error, null, 2));
  return {
    loading,
    doLogin,
    data: data?.customerLogin,
  };
}
