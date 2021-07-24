import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function OrderCard({ description, category, subCategory }) {
  return (
    <Card>
      <Card.Title>{description}</Card.Title>
      <Card.Divider />
      <Card.FeaturedTitle>{category}</Card.FeaturedTitle>
      <Card.FeaturedSubtitle>{subCategory}</Card.FeaturedSubtitle>
      <View>
        <Text>Yes</Text>
      </View>
    </Card>
  );
}
