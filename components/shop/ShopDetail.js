//libraries
import React from "react";

//native-base
import { Spinner } from "native-base";

//stores
import shopStore from "../../stores/shopStore";
import perfumeStore from "../../stores/perfumeStore";

//components
import PerfumeList from "../perfume/PerfumeList";

//styles
import { ShopDetailTitle, ShopDetailImage, ShopDetailWrapper } from "./styles";

import { observer } from "mobx-react";

const ShopDetail = ({ navigation, route }) => {
  const { shop } = route.params;

  if (shopStore.loading) return <Spinner />;

  const perfumes = shop.perfumes.map((perfume) =>
    perfumeStore.getPerfumeById(perfume.id)
  );

  return (
    <>
      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: shop.image }} />
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      </ShopDetailWrapper>
      <PerfumeList perfumes={perfumes} navigation={navigation} />
    </>
  );
};

export default observer(ShopDetail);
