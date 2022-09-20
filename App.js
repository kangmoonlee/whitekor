import React, { useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { HomePage, LoginPage, ExerciseScreen, ScheduleScreen, PaymentScreen } from './src/screens';
import Axios from "axios"
import Store from "./src/store"
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomHeader } from "./src/components";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator()

function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView style={s.container}>
        <StoreApp />
        <StatusBar />
      </SafeAreaView>  
    </Provider>
  )
}

function StoreApp(){
  const { token } = useSelector(state => state.auth) 
  const navigationRef = useNavigationContainerRef()
  
  // const onOptionClick = () => {
  //   navigationRef.current.navigate("exercise")
  //   console.log("개발중1234")
  // }

  useEffect(() => {
      if((token)) {
        console.log(`Apply Token => ${token}`)
        Axios.defaults.headers.common['Authorization'] = `bearer ${token}`
      }
  }, [ token ])

  return !(token) ? <LoginPage /> : 
  <NavigationContainer>
    {/* <CustomHeader /> */}
  
    <Tab.Navigator initialRouteName="exercise" screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Tab.Screen name="exercise" component={ExerciseScreen} options={{
        tabBarIcon: () => {          
          return <FontAwesome5 name="running" size={24} color="black" />
        },
      }} />
      <Tab.Screen name="schedule" component={ScheduleScreen} options={{
        tabBarIcon: () => {
          return <MaterialIcons name="schedule" size={24} color="black" />
        },
      }} />
      <Tab.Screen name="payment" component={PaymentScreen} options={{
        tabBarIcon: () => {
          return <MaterialIcons name="payment" size={24} color="black" />
        },
      }} />
    </Tab.Navigator>
  </NavigationContainer>
}



const s = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default App