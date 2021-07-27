import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SignOutButtonStyled, TotalPrice } from "../styles";

import authStore from "../../../stores/authStore";

import { Button } from "native-base";
import { observer } from "mobx-react";

const SignOutButton = () => {
  const navigation = useNavigation();

  // works as direct signout
  //   const handleSubmit = async () => {
  //     await authStore.signout();
  //     navigation.replace("ShopList");
  //   };
  const handlePress = () => {
    if (authStore.user) {
      Alert.alert(
        "Signed out",
        "You need to signin to buy",
        [
          {
            text: "Signout",
            onPress: async () => {
              await authStore.signout();
              navigation.replace("ShopList");
            },
          },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          //   { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <Button onPress={handlePress}>
      <SignOutButtonStyled name="sign-out" size={24} />
    </Button>
  );
};

export default observer(SignOutButton);
