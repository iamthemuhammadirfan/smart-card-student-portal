import React, {useEffect, useState} from "react";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";

import MainTab from "./components/MainTab";
import LoginScreen from "./screens/LoginScreen";
import AuthContext from "./components/AuthContext";

export default function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#003f5c");
  }, []);
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        {user ? <MainTab /> : <LoginScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
