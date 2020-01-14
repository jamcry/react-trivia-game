import React, { Component } from 'react'
import {
  Container,
  QuestionText,
  AnswerButton
} from "../components/styledComponents";

// Shuffles the items in the input array
const shuffle = (arr) => {
  // Source: https://javascript.info/task/shuffle
  return arr.sort(() => Math.random() - 0.5);
}

class QuestionPage extends Component {
  state = {}

  render() {
    const { question, correct_answer, incorrect_answers } = this.props.data;
    const options = shuffle([correct_answer, ...incorrect_answers]);
    const answerButtons = options.map((option, index) => (
      <AnswerButton
        key={`option_${index}`}
        onClick={() => this.props.handleAnswer(option)}
      >
        {option}
      </AnswerButton>
    ));
    return (
      <Container>
        <QuestionText>{question}</QuestionText>
        {answerButtons}
      </Container>
    );
  }
};

export default QuestionPage;