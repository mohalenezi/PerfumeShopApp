import React from "react";
import {
  HomeBackground,
  OverlayContainer,
  HomeUpText,
  Title,
  BottomStyling,
  ButtonStyling,
} from "../styles";

const Home = () => {
  return (
    <HomeBackground
      source={{
        uri: "https://i.pinimg.com/originals/98/30/94/983094a9d45332c15ae9a24c6e45f67b.jpg",
      }}
    >
      <OverlayContainer>
        <HomeUpText>
          <Title>The Scent</Title>
        </HomeUpText>
        <BottomStyling>
          <ButtonStyling onPress={() => alert("Take me to the shops dude")}>
            Click here to skip
          </ButtonStyling>
        </BottomStyling>
      </OverlayContainer>
    </HomeBackground>
  );
};

export default Home;
