import React, {useEffect, useState, useContext} from "react";
import {Text, RefreshControl, StyleSheet, View, ScrollView} from "react-native";

import AppAttendanceCard from "../components/AppAttendanceCard";

export default function BookScreen() {
  const [loader, setLoader] = useState(false);
  const [books, setBooks] = useState([]);
  const loadData = () => {
    setLoader(true);
    fetch(`https://bsite.net/arslan35/api/student/issuedbookdetails/${1}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(response => {
        setLoader(false);
        setBooks(response);
      })
      .catch(error => {
        setLoader(false);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
        refreshControl={
          <RefreshControl refreshing={loader} onRefresh={loadData} />
        }>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}>
          Records are going to be listed here.{" "}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    paddingHorizontal: 10,
  },
});
