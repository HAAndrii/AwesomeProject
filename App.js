import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LoginScreen from "./src/Components/Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./src/Components/Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  const fontsMain = useFonts({
    Roboto: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  return <LoginScreen></LoginScreen>;
  // <RegistrationScreen></RegistrationScreen>;
}

const styles = StyleSheet.create({});
