import styled from "styled-components/native";

export const ListWrapper = styled.View`
  margin-top: 10%;
`;

export const ShopItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const ShopDetailWrapper = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const ShopDetailImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ShopDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;
