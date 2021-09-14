import React from "react";
import {StyleSheet, ActivityIndicator, View} from "react-native";

export default function Loader({visible}) {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(0, 63, 92,0.6)",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
