import { Drawer } from "expo-router/drawer";
import "../global.css";
import { View } from "react-native";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useFrameSize } from "@react-navigation/elements";
import { ColorProperties } from "react-native-reanimated/lib/typescript/Colors";
export default function RootLayout() {
  return (

    
    <Drawer
    screenOptions={{
      headerShown: true,
      drawerActiveTintColor:"green",
      drawerInactiveTintColor:"gray",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#336a39"
      },
      headerTintColor: "white"
    }}
    >
      
    <Drawer.Screen 
    name="index"
    options={{
      title: "Home",
      drawerIcon: ({color,size}) => (
        <MaterialIcons name="home" size={size} color={color}></MaterialIcons>
      ),
    }}
    />

    <Drawer.Screen 
    name="change"
    options={{
      title: "Choose the bin",
      drawerIcon: ({color,size}) => (
        <MaterialIcons name="info" size={size} color={color}></MaterialIcons>
      )
    }}
    />

    <Drawer.Screen 
    name="Lixeira"
    options={{
      title: "Bin First",
      drawerIcon: ({color,size}) => (
        <MaterialIcons name="eco" size={size} color={color}></MaterialIcons>
      )    
    }}
    />

    <Drawer.Screen 
    name="Lixeira 2"
    options={{
      title: "Bin Second",
      drawerIcon: ({color,size}) => (
        <MaterialIcons name="recycling" size={size} color={color}></MaterialIcons>
      )  
      
    }}
    />
      
      
      </Drawer>

      
      
      
  );
}