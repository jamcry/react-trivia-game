import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from "../assets/win-animation.json";
import {
  Container,
  CenteredIcon,
  Text,
  AnimatedHomeButton
} from "../components/styledComponents";

const WinPage = ({ resetGame, numOfCorrectAnswers, totalPoints }) => {
  return (
    <Container>
      <CenteredIcon>
        <Lottie options={{ animationData: animationData.default }} />
      </CenteredIcon>
      <Text color="green" bold big>You Win!</Text>
      <Text>Congratulations! You have answered all of the {numOfCorrectAnswers} questions correctly!</Text>
      <Text bold>Total: {totalPoints} pts</Text>
      <AnimatedHomeButton
        text="Go Home"
        onClick={resetGame}
      />
    </Container>
  );
}

export default WinPage;