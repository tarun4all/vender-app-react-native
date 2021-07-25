import React, { useEffect } from "react";
import { Header, Avatar, Icon } from "react-native-elements";

import OrderPage from "../order/index";
import { setItem } from "../../services/storage";

export default function Dashboard({ navigation }) {
  return (
    <>
      <Header
        leftComponent={
          <Avatar
            rounded
            source={{
              uri:
                "https://instagram.fdel9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/219822879_295786105618372_1780109637044896911_n.jpg?_nc_ht=instagram.fdel9-1.fna.fbcdn.net&_nc_ohc=aN9vI23ro0UAX8tV5M5&edm=ABfd0MgBAAAA&ccb=7-4&oh=6df328be39321c130e652ae847c44ec8&oe=61028536&_nc_sid=7bff83",
            }}
            onPress={() => {
              setItem("auth", ""), navigation.navigate("Login");
            }}
          />
        }
        centerComponent={{
          text: "Orders",
          style: { color: "#fff", fontWeight: "bold", fontSize: 20 },
        }}
        rightComponent={
          <Icon
            name="pluscircleo"
            type="ant-design"
            color="#fff"
            onPress={() => navigation.navigate("CreateOrder")}
          />
        }
      />
      <OrderPage />
    </>
  );
}
