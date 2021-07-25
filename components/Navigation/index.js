import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";
import PerfumeDetail from "../perfume/PerfumeDetail";
import CartButton from "../cart/buttons/CartButton";
import CartList from "../cart/CartList";

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
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          const { shop } = route.params;
          return {
            title: shop.name,
            headerRight: () => <CartButton />,
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
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Stack.Screen
        name="CartList"
        component={CartList}
        options={{
          title: "pay ya habebi",
          headerRight: () => <CartButton />,
        }}
      />
    </Stack.Navigator>
  );
};
