import React from 'react'
import {
  Container,
  Header,
  CenteredIcon,
  Text,
  ActionButton
} from "../components/styledComponents";

const WrongAnswerPage = (props) => {
  const {
    questionNumber,
    numOfQuestions,
    resetGame,
    totalPoints,
    numOfCorrectAnswers
  } = props;

  return (
    <Container>
      <CenteredIcon>WRONG</CenteredIcon>
      <Text color="red" bold big>Wrong!</Text>
      <Text>
        You have answered {numOfCorrectAnswers} questions correctly,
        collected {totalPoints} pts.
      </Text>
      <ActionButton onClick={resetGame}>
        Go Home
      </ActionButton>
    </Container>
  );
}

export default WrongAnswerPage;