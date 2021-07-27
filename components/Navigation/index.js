import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//components
import Home from "../Home";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";
import PerfumeDetail from "../perfume/PerfumeDetail";
import CartButton from "../cart/buttons/CartButton";
import CartList from "../cart/CartList";
import Signup from "../authentication/Signup";
import Signin from "../authentication/Signin";
import SignOutButton from "../cart/buttons/SignOutButton";

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
          headerLeft: () => <SignOutButton />,
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
            headerLeft: () => <SignOutButton />,
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
            headerLeft: () => <SignOutButton />,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Stack.Screen
        name="CartList"
        component={CartList}
        options={{
          title: "pay ya habebi",
          headerLeft: () => <SignOutButton />,
          headerRight: () => <CartButton />,
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
