import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { stylessButton } from './src/styles/stylessButton.js'
import { stylessContainer } from './src/styles/stylessContainer.js';
import { Text, View, TouchableHighlight, ImageBackground, TextInput } from 'react-native';
import IMGdefundo from "./image/space.jpg"




// import botaoComponents from './src/components/botao.js';

export default function App() {


   const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")




 

  return (
    <View style={stylessContainer.container}>

      <View style={stylessContainer.containerCima}>

        <ImageBackground source={IMGdefundo} style={{ width: "100%", height: "100%", flex: "1" }}>
        </ImageBackground>



      </View>

      <View style={stylessContainer.containerBaixo}>
        <TextInput placeholder='Digite seu Email' value={Email} onChangeText={(value) => { setEmail(value) }} />


        <TextInput placeholder='Digite sua senha' value={Password} secureTextEntry ={true} onChangeText={(value) => { setPassword(value) }} />


        <TouchableHighlight style={[stylessButton.button, stylessButton.login]} underlayColor="blue" onPress={() =>   {if(Email !== "admin") {alert("falha ao fazer login, email ou senha incorreto") }
    else if (Password !== "1234") {
    alert("falha ao fazer login, email   ou senha incorreto")
  } else if (Email === "admin" && Password ==="1234") 
 { alert("Login realizado") } }}>
          <Text>Login</Text>
        </TouchableHighlight>

      </View>
      <StatusBar style="auto" />
    </View>
  );


}


