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

const ShopDetail = () => {
  if (shopStore.loading) return <Spinner />;
  const shop = shopStore.shops[1];

  const perfumes = shop.perfumes.map((perfume) =>
    perfumeStore.getPerfumeById(perfume.id)
  );

  return (
    <>
      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: shop.image }} />
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      </ShopDetailWrapper>
      <PerfumeList perfumes={perfumes} />
    </>
  );
};

export default observer(ShopDetail);
