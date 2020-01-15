import React from 'react'
import {
  Container,
  CenteredIcon,
  Text,
  ActionButton
} from "../components/styledComponents";

import Lottie from 'react-lottie';
import * as animationData from "../assets/correct-animation.json";

const CorrectAnswerPage = (props) => {
  const { goNextQuestion, totalPoints, lastEarnedPoints } = props;

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
      <Text color="green" bold big>Correct!</Text>
      <Text>You have earned {lastEarnedPoints} pts!</Text>
      <Text bold>Total: {totalPoints} pts</Text>
      <ActionButton onClick={goNextQuestion}>
        Next Question
      </ActionButton>
    </Container>
  );
}

export default CorrectAnswerPage;