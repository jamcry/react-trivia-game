import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from "../assets/animation/trivia-animation.json";
import GameSettingsForm from '../components/common/GameSettingsForm';
import {
  Container,
  CenteredIcon,
} from "../components/styled/styledComponents";

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