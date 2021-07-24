import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";

export default function OverlayLoader({ toggleOverlay }) {
  return (
    <Overlay isVisible={true} onBackdropPress={toggleOverlay}>
      <ActivityIndicator size="large" />
    </Overlay>
  );
}
