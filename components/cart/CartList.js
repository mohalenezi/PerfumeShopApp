import React from "react";
import { Spinner, List } from "native-base";

//stores
import cartStore from "../../stores/cartStore";
import perfumeStore from "../../stores/perfumeStore";

// cart component
import CartItem from "./CartItem";

//observer
import { observer } from "mobx-react";

//styles
import { CheckoutButton, CheckoutButtonText } from "./styles";

const CartList = () => {
  if (perfumeStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...perfumeStore.getPerfumeById(item.perfumeId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return (
    <>
      <List>{cartList}</List>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </>
  );
};

export default observer(CartList);
