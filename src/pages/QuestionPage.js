import React, { Component } from 'react';
// import he for decoding HTML encoded question texts
import he from 'he';
import CircularTimerView from '../components/common/CircularTimerView';

import { Container, QuestionText, AnswerButton } from '../components/styled/styledComponents';

/* Shuffles the items in the input array
 Source: https://javascript.info/task/shuffle */
const shuffle = arr => {
  return arr.sort(() => Math.random() - 0.5);
};

class QuestionPage extends Component {
  state = {
    question: '',
    options: [],
    remainingSeconds: 15
  };

  decrementRemainingSeconds = () => {
    this.setState(prevState => ({
      remainingSeconds: prevState.remainingSeconds - 1
    }));
  };

  componentDidMount = () => {
    const { question, correct_answer, incorrect_answers } = this.props.data;
    const options = shuffle([correct_answer, ...incorrect_answers]);
    const timer = setInterval(this.decrementRemainingSeconds, 1000);
    this.setState({
      question,
      options,
      timer
    });
  };

  componentDidUpdate = () => {
    if (this.state.remainingSeconds === 0) {
      this.props.handleTimeOver();
    }
  };

  componentWillUnmount = () => {
    // Stop the timer before unmounting
    clearInterval(this.state.timer);
  };

  render() {
    const answerButtons = this.state.options.map((option, index) => (
      <AnswerButton
        key={`option_${index}`}
        onClick={() => this.props.handleAnswer(option, this.state.remainingSeconds)}
      >
        {he.decode(option)}
      </AnswerButton>
    ));

    return (
      <Container>
        <CircularTimerView duration={15} remaining={this.state.remainingSeconds} />

        <QuestionText>{he.decode(this.state.question)}</QuestionText>

        {answerButtons}
      </Container>
    );
  }
}

export default QuestionPage;
