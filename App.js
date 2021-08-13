import React, {Component} from "react";
import {Text, StyleSheet, View, StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

import MainTab from "./components/MainTab";

export default class App extends Component {
  componentDidMount() {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#003f5c");
  }
  render() {
    return (
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
