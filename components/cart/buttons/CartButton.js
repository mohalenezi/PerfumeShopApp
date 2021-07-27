import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CartButtonStyled, TotalPrice } from "../styles";

import cartStore from "../../../stores/cartStore";
import authStore from "../../../stores/authStore";

import { Button } from "native-base";
import { observer } from "mobx-react";

const CartButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("CartList");
    } else {
      Alert.alert(
        "Sign in",
        "You need to signin before checkout",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button onPress={handlePress}>
      <CartButtonStyled name="shopping-cart" size={24} />
      <TotalPrice>{cartStore.totalQuantity}</TotalPrice>
    </Button>
  );
};

export default observer(CartButton);
