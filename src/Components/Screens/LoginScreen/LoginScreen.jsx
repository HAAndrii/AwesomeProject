import { useFonts } from "expo-font";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import MyButton from "../MyButton";

import image from "../../../Images/PhotoBG.jpg";
import addImage from "../../../Images/add.png";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={
          styles.image
          // justifyContent: isFocus === "" ? "flex-end" : "center",
        }>
        {/* <KeyboardAvoidingView behavior="position"> */}
        <View
          style={{
            ...styles.form,
            height: isFocus === "" ? 490 : 250,
          }}>
          <Text style={styles.title}>Увійти</Text>

          <TextInput
            style={isFocus === "email" ? styles.inputFocus : styles.input}
            onFocus={() => setIsFocus("email")}
            onBlur={() => setIsFocus("")}
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={isFocus === "password" ? styles.inputFocus : styles.input}
            onFocus={() => setIsFocus("password")}
            onBlur={() => setIsFocus("")}
            placeholder="Пароль"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}></TextInput>

          <MyButton
            title={"Показати"}
            onPress={() => console.log("onPress", "onPress")}
            buttonStyle={styles.passwordBtn}
            textStyle={styles.passwordBtnText}></MyButton>

          <View style={{ height: 51, marginBottom: 16, width: "100%" }}>
            <MyButton
              title={"Увійти"}
              onPress={() => console.log("onPress", "onPress")}
              buttonStyle={styles.registrationBtn}
              textStyle={styles.registrationBtnText}></MyButton>
          </View>

          <MyButton
            title={"Немає акаунту? Зареєструватися"}
            onPress={() => console.log("onPress", "onPress")}
            buttonStyle={styles.loginBtn}
            textStyle={styles.loginBtnText}></MyButton>
        </View>
        {/* </KeyboardAvoidingView> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  addPhoto: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 25,
    right: 135,
  },
  photo: {
    justifyContent: "center",
    alignItems: "center",

    width: 120,
    height: 120,
    // left: 128,
    top: -60,

    backgroundColor: "#F6F6F6",
    // backgroundColor: "red",
    borderRadius: 16,
  },

  loginBtn: {},

  loginBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },

  registrationBtn: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  registrationBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },

  passwordBtn: {
    width: 80,
    alignSelf: "flex-end",
    marginRight: 16,
    top: -50,
    backgroundColor: "#F6F6F6",
  },

  passwordBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",

    color: "#1B4371",
  },

  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    alignItems: "center",

    width: "auto",
    // height: 549,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },

  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
    marginBottom: 32,
    marginTop: 32,
  },

  input: {
    height: 50,
    width: "100%",

    backgroundColor: "#F6F6F6",

    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,

    marginBottom: 16,
    paddingHorizontal: 10,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },

  inputFocus: {
    height: 50,
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderColor: "#FF6C00",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,

    marginBottom: 16,
    paddingHorizontal: 10,

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
});
