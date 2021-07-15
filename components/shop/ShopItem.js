import React from "react";

//react-native
import { Image } from "react-native";
//native-base
import { List } from "native-base";

import { ShopItemStyled } from "./styles";

const ShopItem = ({ shop, navigation }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("ShopDetail", { shop: shop })}
    >
      <Image source={{ uri: shop.image }} style={{ width: 100, height: 100 }} />
      <ShopItemStyled>{shop.name}</ShopItemStyled>
    </List.Item>
  );
};

export default ShopItem;
