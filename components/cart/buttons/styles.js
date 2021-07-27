import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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

export const SignOutButtonStyled = styled(FontAwesome)`
  color: ${(props) => props.theme.red};
  margin-left: 40px;
`;

export const TrashIcon = styled(FontAwesome5)`
  color: ${(props) => props.theme.red};
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.red};
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
