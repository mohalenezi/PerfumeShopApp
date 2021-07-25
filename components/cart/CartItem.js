import { List } from "native-base";
import { Text } from "react-native";
import React from "react";

import { TotalPrice } from "./styles";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name}</Text>
      <Text>
        {item.price} KD X {item.quantity}
      </Text>
      <TotalPrice>{item.price * item.quantity}</TotalPrice>
    </List.Item>
  );
};

export default CartItem;
