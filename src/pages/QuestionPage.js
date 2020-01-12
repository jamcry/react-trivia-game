import React, { Component } from 'react'
import {
  Container,
  Header,
  Text,
  AnswerButton
} from "../components/styledComponents";

class QuestionPage extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Header>Question 1/15</Header>
        <Text>What is bla..bla..?</Text>
        <AnswerButton>A. Lorem ipsum dolor sit amet consectetur adipisicing elit.</AnswerButton>
        <AnswerButton>B. Reiciendis quaerat placeat accusamus ipsum eum laudantium natus.</AnswerButton>
        <AnswerButton>C. Aliquid amet accusantium ratione facere incidunt veniam sed cum fugit necessitatibus totam et numquam.</AnswerButton>
        <AnswerButton>D. This is Wong!</AnswerButton>
      </Container>
    );
  }
};

export default QuestionPage;