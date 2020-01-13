import React, { Component } from 'react';
import WelcomePage from './pages/WelcomePage';
import CorrectAnswerPage from './pages/CorrectAnswerPage';
import WrongAnswerPage from './pages/WrongAnswerPage';
import QuestionPage from './pages/QuestionPage';
import questionData from "./questionData";
// import { Header, Text } from './components/styledComponents';

const pages = {
  WELCOME: "WELCOME_PAGE",
  QUESTION: "QUESTION_PAGE",
  CORRECT_ANSWER: "CORRECT_ANSWER_PAGE",
  WRONG_ANSWER: "WRONG_ANSWER_PAGE"
};

const defaultState = {
  currentPage: pages.WELCOME,
  questions: [],
  numOfQuestions: 0,
  indexOfCurrentQuestion: -1,
  numOfCorrectAnswers: 0,
  gameIsActive: false,
  gameIsOver: false,
  currentQuestion: null,
  totalPoints: 0,
};

const POINTS_PER_QUESTION = 200;

class App extends Component {
  state = defaultState;

  componentDidMount = () => {
    this.loadQuestionData();
  };

  loadQuestionData = () => {
    const data = questionData;
    this.setState({
      questions: data.results,
      numOfQuestions: data.results.length
    });
  };

  startGame = () => {
    this.setState(prevState => ({
      gameIsActive: true,
      indexOfCurrentQuestion: 0,
      currentQuestion: prevState.questions[0],
      currentPage: pages.QUESTION
    }))
  };

  resetGame = () => {
    this.setState(defaultState, () => this.loadQuestionData());
  };

  handleAnswer = (answer) => {
    const correctAnswer = this.state.currentQuestion.correct_answer;
    if(answer === correctAnswer) {
      this.setState(prevState => ({
        currentPage: pages.CORRECT_ANSWER,
        totalPoints: prevState.totalPoints + POINTS_PER_QUESTION,
        numOfCorrectAnswers: prevState.numOfCorrectAnswers + 1
      }));
    } else {
      this.setState({
        currentPage: pages.WRONG_ANSWER
      });
    }
  }

  getNextQuestion = () => {
    this.setState(prevState=> ({
      indexOfCurrentQuestion: prevState.indexOfCurrentQuestion + 1,
      currentQuestion: prevState.questions[prevState.indexOfCurrentQuestion+1],
      currentPage: pages.QUESTION
    }))
  }

  render () {
    const {currentPage} = this.state;
    const {WELCOME, QUESTION, CORRECT_ANSWER, WRONG_ANSWER} = pages;

    let currentComponent = null;

    if(currentPage === WELCOME) {
      currentComponent = (
        <WelcomePage startGame={this.startGame} />
      );
    }

    if(currentPage === QUESTION) {
      currentComponent = (
        <QuestionPage
          data={this.state.currentQuestion}
          handleAnswer={this.handleAnswer}
          questionNumber={this.state.indexOfCurrentQuestion+1}
          numOfQuestions={this.state.numOfQuestions}
        />
      );
    }

    if(currentPage === CORRECT_ANSWER) {
      currentComponent = (
        <CorrectAnswerPage
          goNextQuestion={this.getNextQuestion}
          questionNumber={this.state.indexOfCurrentQuestion+1}
          numOfQuestions={this.state.numOfQuestions}
          totalPoints={this.state.totalPoints}
        />
      );
    }

    if(currentPage === WRONG_ANSWER) {
      currentComponent = (
        <WrongAnswerPage
          numOfCorrectAnswers={this.state.numOfCorrectAnswers}
          totalPoints={this.state.totalPoints}
          resetGame={this.resetGame}
          questionNumber={this.state.indexOfCurrentQuestion+1}
          numOfQuestions={this.state.numOfQuestions}
        />
      );
    }

    return (
      <div className="App">
        {
          /* TODO: Avoid repetitive passing {numOfQuestions, questionNumber}
              by conditionally filling Header in App rather than each component.

          // <Header><Text bold>Conditional Header Content</Text></Header>
          */
        }
        {currentComponent}
      </div>
    );
  }
}

export default App;
