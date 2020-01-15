import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from "../assets/correct-animation.json";
import {
  Container,
  CenteredIcon,
  Text,
  ActionButton
} from "../components/styledComponents";

const CorrectAnswerPage = ({ goNextQuestion, totalPoints, lastEarnedPoints }) => {
  return (
    <Container>
      <CenteredIcon>
        <Lottie options={{ animationData: animationData.default, loop: false }} />
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