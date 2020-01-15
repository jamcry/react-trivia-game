import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from "../assets/trivia-animation.json";
import GameSettingsForm from '../components/GameSettingsForm';
import {
  Container,
  CenteredIcon,
} from "../components/styledComponents";

const WelcomePage = ({ startGame }) => {
  return (
    <Container>
      <CenteredIcon>
        <Lottie options={{ animationData: animationData.default }} />
      </CenteredIcon>
      <GameSettingsForm handleSubmit={startGame} />
    </Container>
  );
};

export default WelcomePage;