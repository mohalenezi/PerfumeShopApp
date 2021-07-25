import React, { useState } from "react";

//react-native
import { Text, Image } from "react-native";
//native-base
import { List, Button } from "native-base";

import NumericInput from "react-native-numeric-input";
import cartStore from "../../stores/cartStore";

const PerfumeItem = ({ perfume, navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { perfumeId: perfume.id, quantity };
    cartStore.addTocart(newItem);
  };
  return (
    <List.Item
      onPress={() => navigation.navigate("PerfumeDetail", { perfume: perfume })}
    >
      <Image
        source={{ uri: perfume.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{perfume.name}</Text>
      <Text>{perfume.price} KD</Text>
      <NumericInput
        rounded
        totalWidth={80}
        totalHeight={40}
        initValue={quantity}
        minValue={1}
        onChange={setQuantity}
      />
      <Button onPress={handleAdd}>
        <Text>Add</Text>
      </Button>
    </List.Item>
  );
};

export default PerfumeItem;
