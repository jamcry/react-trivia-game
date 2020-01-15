import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from "../assets/time-is-up-animation.json";
import {
  Container,
  CenteredIcon,
  Text,
  AnimatedHomeButton
} from "../components/styledComponents";

const TimeIsUpPage = ({ resetGame, totalPoints }) => {
  return (
    <Container>
      <CenteredIcon>
        <Lottie options={{ animationData: animationData.default, loop: false }} />
      </CenteredIcon>
      <Text color="red" bold big>Time's Up!</Text>
      <Text>You haven't answered the question in 15 seconds! Game Over!</Text>
      <Text bold>Total: {totalPoints} pts</Text>
      <AnimatedHomeButton
        text="Try Again"
        onClick={resetGame}
      />
    </Container>
  );
}

export default TimeIsUpPage;