import React from 'react'
import {
  Container,
  Header,
  CenteredIcon,
  Text,
  ActionButton
} from "../components/styledComponents";

const CorrectAnswerPage = (props) => {
  const {
    goNextQuestion,
    questionNumber, 
    numOfQuestions,
    totalPoints
  } = props;

  return (
    <Container>
      <CenteredIcon>CORRECT</CenteredIcon>
      <Text color="green" bold big>Correct!</Text>
      <Text>You have earned 200 pts!</Text>
      <Text bold>Total: {totalPoints} pts</Text>
      <ActionButton
        onClick={goNextQuestion}
      >
        Next Question
      </ActionButton>
    </Container>
  );
}

export default CorrectAnswerPage;