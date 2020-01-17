import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from "../assets/animation/wrong-animation.json";
import {
  Container,
  CenteredIcon,
  Text,
  AnimatedHomeButton
} from "../components/styled/styledComponents";

const WrongAnswerPage = ({ resetGame, totalPoints, numOfCorrectAnswers }) => {
  return (
    <Container>
      <CenteredIcon>
        <Lottie options={{ animationData: animationData.default, loop: false }} />
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