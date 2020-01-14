import React, { Component } from 'react';
import WelcomePage from './pages/WelcomePage';
import CorrectAnswerPage from './pages/CorrectAnswerPage';
import WrongAnswerPage from './pages/WrongAnswerPage';
import QuestionPage from './pages/QuestionPage';
import questionData from "./questionData";
import { Header } from './components/styledComponents';
import WinPage from './pages/WinPage';
import OverlayLoader from './components/OverlayLoader';

// Constant variables for page rendering
const pages = {
  WELCOME: "WELCOME_PAGE",
  QUESTION: "QUESTION_PAGE",
  CORRECT_ANSWER: "CORRECT_ANSWER_PAGE",
  WRONG_ANSWER: "WRONG_ANSWER_PAGE",
  WIN: "WIN_PAGE"
};

const defaultState = {
  currentPage: pages.WELCOME,
  questions: [],
  numOfQuestions: 0,
  indexOfCurrentQuestion: -1,
  numOfCorrectAnswers: 0,
  currentQuestion: null,
  totalPoints: 0,
};

// TODO: Implement timer and pointing system according to
// remaining time
const POINTS_PER_QUESTION = 200;

class App extends Component {
  state = defaultState;

  // Mockup function for fetching data via API request
  loadQuestionData = () => {
    // Set loading state true before attempting API request
    this.setState({
      isLoading: true
    });
    // Mockup for API request, returns data after 2 seconds
    const data = questionData;
    setTimeout(
      () => this.setState({
        currentPage: pages.QUESTION,
        questions: data.results,
        numOfQuestions: data.results.length,
        isLoading: false,
        indexOfCurrentQuestion: 0,
        currentQuestion: data.results[0]
      })
    ,22000);
  };

  resetGame = () => {
    this.setState(defaultState, () => this.loadQuestionData());
  };

  handleAnswer = (answer) => {
    const correctAnswer = this.state.currentQuestion.correct_answer;
    if(answer === correctAnswer) {
      this.setState(prevState => ({
        currentPage: (prevState.numOfCorrectAnswers+1===prevState.numOfQuestions) ? pages.WIN : pages.CORRECT_ANSWER,
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
    const {currentPage, numOfQuestions, indexOfCurrentQuestion} = this.state;
    const questionNumber = indexOfCurrentQuestion + 1; //prevent-off-by-one
    const {WELCOME, QUESTION, CORRECT_ANSWER, WRONG_ANSWER, WIN} = pages;

    let currentComponent = null;
    let headerContent = "React Trivia Game";

    if(currentPage === WELCOME) {
      currentComponent = (
        <WelcomePage startGame={this.loadQuestionData} />
      );
    }

    if(currentPage === QUESTION) {
      headerContent = `Question ${questionNumber} / ${numOfQuestions}`;
      currentComponent = (
        <QuestionPage
          data={this.state.currentQuestion}
          handleAnswer={this.handleAnswer}
        />
      );
    }

    if(currentPage === CORRECT_ANSWER) {
      headerContent = `Question ${questionNumber} / ${numOfQuestions}`;
      currentComponent = (
        <CorrectAnswerPage
          goNextQuestion={this.getNextQuestion}
          totalPoints={this.state.totalPoints}
        />
      );
    }

    if(currentPage === WRONG_ANSWER) {
      headerContent = `Question ${questionNumber} / ${numOfQuestions}`;
      currentComponent = (
        <WrongAnswerPage
          numOfCorrectAnswers={this.state.numOfCorrectAnswers}
          totalPoints={this.state.totalPoints}
          resetGame={this.resetGame}
        />
      );
    }

    if(currentPage === WIN) {
      headerContent = `YOU WIN !`;
      currentComponent = (
        <WinPage
          numOfCorrectAnswers={this.state.numOfCorrectAnswers}
          totalPoints={this.state.totalPoints}
          resetGame={this.resetGame}
        />
      );
    }
    

    return (
      <div className="App">
        <Header>{headerContent}</Header>
        { this.state.isLoading && <OverlayLoader /> }
        {currentComponent}
      </div>
    );
  }
}

export default App;
