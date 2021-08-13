import React, {Component} from "react";
import {Text, StyleSheet, View, ScrollView} from "react-native";

import AppAttendanceCard from "../components/AppAttendanceCard";

export default class BookScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppAttendanceCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    paddingHorizontal: 10,
  },
});
