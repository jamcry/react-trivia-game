import React from 'react'
import {
  Container,
  CenteredIcon,
  Text,
  AnimatedHomeButton
} from "../components/styledComponents";

import Lottie from 'react-lottie';
import * as animationData from "../assets/wrong-animation.json";

const WrongAnswerPage = (props) => {
  const {
    resetGame,
    totalPoints,
    numOfCorrectAnswers
  } = props;

  const lottieDefaultOptions = {
    loop: false,
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
      <Text color="red" bold big>Wrong!</Text>
      <Text>
        You have answered {numOfCorrectAnswers} questions correctly,
        collected {totalPoints} pts.
      </Text>
      <AnimatedHomeButton
        text="Go Home"
        onClick={resetGame}
      />
    </Container>
  );
}

export default WrongAnswerPage;