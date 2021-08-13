import React, {Component} from "react";
import {Text, StyleSheet, View, ScrollView} from "react-native";

import AppAttendanceCard from "../components/AppAttendanceCard";

export default class AttendanceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppAttendanceCard />
          <AppAttendanceCard />
          <AppAttendanceCard />
          <AppAttendanceCard />
          <AppAttendanceCard />
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
