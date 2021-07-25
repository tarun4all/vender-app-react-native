import "react-native-gesture-handler";
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "react-native-elements";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Order from "./pages/order";
import CreateOrder from "./pages/createOrder";
import Dashboard from "./pages/dashboard";

import { getItem } from "./services/storage";

const Stack = createStackNavigator();

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await getItem("auth");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const httpLink = createHttpLink({
  uri: "https://ankit0403.herokuapp.com/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const AuthCheck = ({ navigation }) => {
  useEffect(() => {
    getItem("auth").then((token) => {
      if (token) navigation.navigate("Dashboard");
      else navigation.navigate("Login");
    });
  });

  return <></>;
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Main"
          >
            <Stack.Screen name="Main" component={AuthCheck} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="CreateOrder" component={CreateOrder} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}
