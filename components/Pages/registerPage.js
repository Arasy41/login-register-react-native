import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import CustomInput from "../Custom/customInput";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPassword2Visible] = useState(false);

  const handleRegister = () => {
    console.log("Register pressed");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const togglePassword2Visibility = () => {
    setIsPassword2Visible(!isPasswordVisible2);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/tokopedia-logo.png")}
      ></Image>

      <Text style={styles.greetingText}>Welcome!</Text>

      <CustomInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <View style={styles.containerPass}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!isPasswordVisible}
          style={styles.inputPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={togglePasswordVisibility}
        >
          <Icon name={isPasswordVisible ? "eye-off" : "eye"} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerPass}>
        <TextInput
          placeholder="Repeat Password"
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          secureTextEntry={!isPasswordVisible2}
          style={styles.inputPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={togglePassword2Visibility}
        >
          <Icon name={isPasswordVisible2 ? "eye-off" : "eye"} size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={() => navigation.navigate("Login") + handleRegister}
      >
        <Text style={styles.textButton}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  containerPass: {
    width: "80%",
    marginTop: 13,
    height: 50,
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 13,
  },
  logo: {
    width: "40%",
    height: "30%",
  },
  eyeIcon: {
    marginTop: 15,
    marginRight: 15,
  },
  greetingText: {
    fontSize: 30,
    fontVariant: "bold",
    marginTop: 30,
    marginBottom: 30,
  },
  signUpText: {
    fontSize: 20,
    fontVariant: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
  },
  inputPassword: {
    flex: 1,
    paddingLeft: 10,
  },
  buttonRegister: {
    alignItems: "center",
    backgroundColor: "#FFF",
    marginTop: 10,
    paddingHorizontal: 140,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  textButton: {
    alignItems: "center",
    color: "#008000",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
