import React from 'react'
import {
  Container,
  Header,
  CenteredIcon,
  Text,
  ActionButton
} from "../components/styledComponents";

const CorrectAnswerPage = () => {
  return (
    <Container>
      <Header>Question 1/15</Header>
      <CenteredIcon>CORRECT</CenteredIcon>
      <Text color="green" bold big>Correct!</Text>
      <Text>You have earned 200 pts!</Text>
      <Text bold>Total: 350 pts</Text>
      <ActionButton>Next Question</ActionButton>
    </Container>
  );
}

export default CorrectAnswerPage;