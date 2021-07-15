import React from "react";

//native-base
import { List, Spinner } from "native-base";

//components
import ShopItem from "./ShopItem";

//observer
import { observer } from "mobx-react";

//stores
import shopStore from "../../stores/shopStore";

//styles
import { ListWrapper } from "./styles";

const ShopList = ({ navigation }) => {
  if (shopStore.loading) return <Spinner />;
  const shops = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} navigation={navigation} />
  ));

  return (
    <ListWrapper>
      <List>{shops}</List>
    </ListWrapper>
  );
};

export default observer(ShopList);
