import React from "react";

import { useNavigation } from "@react-navigation/native";

import { CartButtonStyled } from "../styles";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartButtonStyled
      name="shopping-cart"
      size={24}
      onPress={() => navigation.navigate("CartList")}
    />
  );
};

export default CartButton;
