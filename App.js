//libraries
import React from "react";
import { NativeBaseProvider } from "native-base";

import { StyleSheet, Text, View } from "react-native";
//components
import Home from "./components/Home";
import ShopList from "./components/shop/ShopList";
import ShopDetail from "./components/shop/ShopDetail";

//styles
import { ThemeProvider } from "styled-components";

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
        {/* <Home /> */}
        {/* <ShopList /> */}
        <ShopDetail />
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
