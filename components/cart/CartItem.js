import { List } from "native-base";
import { Text } from "react-native";
import React from "react";

import { TrashIcon, TotalPrice } from "./styles";
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name}</Text>
      <Text>
        {item.price} KD X {item.quantity}
      </Text>
      <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      <TrashIcon
        name="trash-alt"
        size={24}
        onPress={() => cartStore.deleteFromCart(item.id)}
      />
    </List.Item>
  );
};

export default CartItem;
