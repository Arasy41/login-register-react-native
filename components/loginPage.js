// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons as Icon} from '@expo/vector-icons'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    console.log('Login berhasil');
  };

  const handleGoogleLogin = () => {
    console.log('Login dengan google')
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>

      <Image
        style= {styles.logo}
        source={require("../assets/tokopedia-logo.png")}>
      </Image>

      <Text style = {styles.greetingText} >Welcome Back!</Text>

      <View style={styles.container2}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputEmail}
        />
        <View style= {styles.containerPass}>
          <TextInput 
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry = {!isPasswordVisible}
            style={styles.inputPassword}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}>
            <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={20}/>
          </TouchableOpacity>
        </View>

        <Text style={styles.textForgotPass}>
          Forgot Password ?
        </Text>
      </View>

      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={handleLogin}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <Image 
          source={require("../assets/frame1.png")}
          style={styles.frame1}/>

        <TouchableOpacity
          style={styles.buttonGoogle}
          onPress={handleGoogleLogin}>
          <Image 
            source={require("../assets/google-logo.png")}
            style={styles.imageGoogle}
          />
          <Text style={styles.textButton2}>Login With Google</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.viewRegis}>
        <Text
          style={styles.regisText}>Don't have an account?
        </Text>
        <Text
          style={styles.regisText2}
          onPress={() => navigation.navigate('Register')}> Register        
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center'
  },
  container2: {
    textAlign: 'left',
  },
  containerPass: {
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 20,
  },
  logo: {
    width: '40%',
    height: '30%',
  },
  eyeIcon: {
    marginTop: 15,
    marginRight: 15,
  },
  greetingText: {
    fontSize: 30,
    fontVariant: 'bold',
    marginTop: 30,
    marginBottom: 40,
  },
  inputEmail: {
    width: 340,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  inputPassword: {
    flex: 1,
    paddingLeft: 10,
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#008000',
    marginTop: 20,
    paddingHorizontal: 150,
    paddingVertical: 15,
    borderRadius: 10,
  },
  frame1:{
    marginTop: 20,
    width: 350,
    height: 20,
  },
  buttonGoogle: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:'black',
  },
  imageGoogle: {
    marginTop: 5,
    width: 40,
    height: 40,
  },
  textButton: {
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  textButton2: {
    marginTop: 15,
    paddingLeft: 75,
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  viewRegis: {
    flexDirection: 'row',
  },
  regisText: {
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  regisText2: {
    marginTop: 20,
    color: '#00A9FF',
    fontWeight: 'bold',
  },
  textForgotPass: {
    alignSelf:'flex-end',
    textAlign: 'right',
    color: 'grey',
  }
});

export default LoginScreen;
