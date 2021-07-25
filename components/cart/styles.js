import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.pink};
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(FontAwesome5)`
  color: ${(props) => props.theme.red};
  margin-right: 10px;
`;
