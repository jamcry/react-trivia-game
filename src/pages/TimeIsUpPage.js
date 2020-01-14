import React from 'react'
import {
  Container,
  CenteredIcon,
  Text,
  AnimatedHomeButton
} from "../components/styledComponents";

import Lottie from 'react-lottie';
import * as animationData from "../assets/time-is-up-animation.json";

const TimeIsUpPage = (props) => {
  const { resetGame, totalPoints } = props;

  const lottieDefaultOptions = {
    loop: false,
    autoplay: true,
    speed: '1.75',
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container>
      <CenteredIcon>
        <Lottie options={lottieDefaultOptions} />
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