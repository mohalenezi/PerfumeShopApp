import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";
import PerfumeDetail from "../perfume/PerfumeDetail";

const Stack = createStackNavigator();

export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShopList"
        component={ShopList}
        options={{
          title: "Choose your Favourite Shop",
        }}
      />
      <Stack.Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
          };
        }}
      />
      <Stack.Screen
        name="PerfumeDetail"
        component={PerfumeDetail}
        options={({ route }) => {
          const { perfume } = route.params;
          return {
            title: perfume.name,
          };
        }}
      />
    </Stack.Navigator>
  );
};
