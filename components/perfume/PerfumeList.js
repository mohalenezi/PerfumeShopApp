import React from "react";

//native-base
import { List, Spinner } from "native-base";

// styles
import { ListWrapper } from "./styles";
// components
import PerfumeItem from "./PerfumeItem";

//stores
import perfumeStore from "../../stores/perfumeStore";

const PerfumeList = ({ perfumes, navigation }) => {
  if (perfumeStore.loading) return <Spinner />;
  const perfumesList = perfumes.map((perfume) => (
    <PerfumeItem perfume={perfume} key={perfume.id} navigation={navigation} />
  ));
  return (
    <ListWrapper>
      <List>{perfumesList}</List>
    </ListWrapper>
  );
};

export default PerfumeList;
