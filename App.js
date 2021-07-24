import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "react-native-elements";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Order from "./pages/order";
import CreateOrder from "./pages/createOrder";
import Dashboard from "./pages/dashboard";

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: "https://dd6238a9240a.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="Dashboard"
          >
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
