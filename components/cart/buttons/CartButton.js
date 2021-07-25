import React from "react";

import { useNavigation } from "@react-navigation/native";

import { CartButtonStyled, TotalPrice } from "../styles";
import cartStore from "../../../stores/cartStore";
import { Button } from "native-base";
import { observer } from "mobx-react";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button>
      <CartButtonStyled
        name="shopping-cart"
        size={24}
        onPress={() => navigation.navigate("CartList")}
      />
      <TotalPrice>{cartStore.totalQuantity}</TotalPrice>
    </Button>
  );
};

export default observer(CartButton);
