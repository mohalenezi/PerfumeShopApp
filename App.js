import "react-native-gesture-handler";
//libraries
import React from "react";
import { NativeBaseProvider } from "native-base";

import { StyleSheet, Text, View } from "react-native";
//components
import Home from "./components/Home";
import ShopList from "./components/shop/ShopList";
import ShopDetail from "./components/shop/ShopDetail";
import PerfumeDetail from "./components/perfume/PerfumeDetail";

//styles
import { ThemeProvider } from "styled-components";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const theme = {
  mainColor: "#293241",
  backgroundColor: "#e0fbfc",
  pink: "#f283a2",
  red: "red",
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ShopList" component={ShopList} />
            <Stack.Screen name="ShopDetail" component={ShopDetail} />
            <Stack.Screen name="PerfumeDetail" component={PerfumeDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
