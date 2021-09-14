import React, {useContext, useEffect, useState} from "react";
import {StyleSheet, RefreshControl, View, ScrollView} from "react-native";
import moment from "moment";

import AppAttendanceCard from "../components/AppAttendanceCard";

export default function AttendanceScreen() {
  const [loader, setLoader] = useState(false);
  const [attendance, setAttendance] = useState([]);

  const loadData = () => {
    setLoader(true);
    fetch(`https://bsite.net/arslan35/api/student/enteranceexithistory/${1}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(response => {
        setLoader(false);
        setAttendance(response);
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
        refreshControl={
          <RefreshControl refreshing={loader} onRefresh={loadData} />
        }>
        {attendance.map((item, index) => (
          <AppAttendanceCard
            key={index}
            present={item.CheckedIn}
            enterTime={moment(item.EnteredAt).format("h:mm a")}
            date={moment(item.EnteredAt).format("D MMM, YYYY")}
          />
        ))}
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
