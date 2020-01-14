import React from 'react'
import {
  Container,
  CenteredIcon,
  Text,
  AnimatedHomeButton
} from "../components/styledComponents";

import Lottie from 'react-lottie';
import * as animationData from "../assets/win-animation.json";

const WinPage = (props) => {
  const {
    resetGame,
    numOfCorrectAnswers,
    totalPoints
  } = props;

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
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