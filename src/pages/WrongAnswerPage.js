import React from 'react'
import {
  Container,
  Header,
  CenteredIcon,
  Text,
  ActionButton
} from "../components/styledComponents";

const WrongAnswerPage = () => {
  return (
    <Container>
      <Header>Question 1/15</Header>
      <CenteredIcon>WRONG</CenteredIcon>
      <Text color="red" bold big>Wrong!</Text>
      <Text>Game over! You have finished with 350 pts.</Text>
      <ActionButton onClick={() => alert("going home!")}>Go Home</ActionButton>
    </Container>
  );
}

export default WrongAnswerPage;