//libraries
import React from "react";

//native-base
import { Spinner } from "native-base";

//stores
import perfumeStore from "../../stores/perfumeStore";

//styles
import {
  ShopDetailTitle,
  ShopDetailImage,
  ShopDetailWrapper,
} from "../shop/styles";

import { observer } from "mobx-react";

const PerfumeDetail = ({ navigation, route }) => {
  const { perfume } = route.params;
  if (perfumeStore.loading) return <Spinner />;

  return (
    <>
      <ShopDetailWrapper>
        <ShopDetailImage source={{ uri: perfume.image }} />
        <ShopDetailTitle>{perfume.name}</ShopDetailTitle>
        <ShopDetailTitle>{perfume.description}</ShopDetailTitle>
        <ShopDetailTitle>{perfume.price}</ShopDetailTitle>
      </ShopDetailWrapper>
    </>
  );
};

export default observer(PerfumeDetail);
