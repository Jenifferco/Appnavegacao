import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (


    <View style={{flex: 1,justifyContent: 'center',backgroundColor:'#9FB6CD' }}>
      <View style={{flexDirection: 'row',justifyContent: 'center'}}>
        <Button title="Tela 1" 
        onPress={() => navigation.navigate('Tela1')} 
        /> 
        <Button title="Tela 2"
        onPress={() => navigation.navigate('Tela2')}
        />      
        <Button title="Tela 3"
        onPress={() => navigation.navigate('Tela3')}
        />
      </View>
    </View>
  );
}

function Tela1({ navigation }) {
  return (

    <View style={{ flex: 1, justifyContent: 'center', }}>
      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor: '#000000'}}>
        <Image source={require('./images/programacao.png')}/>
      </View>

      <View>
        <Button title="back" onPress={() => navigation.popToTop()}/>      
      </View>
   </View>
  );
}

function Tela2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <Image source={require('./images/mobile.png')}/>
      </View>

      <View>
        <Button title="back" onPress={() => navigation.popToTop()}/>      
      </View>
   </View>
  );
}

function Tela3({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor: '#000000'}}>
        <Image source={require('./images/binario.png')}/>
      </View>

      <View>
        <Button title="back" onPress={() => navigation.popToTop()}/>      
      </View>
   </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Atividade de navegação">
        <Stack.Screen name="Atividade de navegação" component={HomeScreen} />
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Tela3" component={Tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

