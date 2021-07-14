import React from "react";

//react-native
import { Text, Image } from "react-native";
//native-base
import { List } from "native-base";

const PerfumeItem = ({ perfume }) => {
  return (
    <List.Item>
      <Image
        source={{ uri: perfume.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{perfume.name}</Text>
      <Text>{perfume.price} KD</Text>
    </List.Item>
  );
};

export default PerfumeItem;
