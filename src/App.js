import React, { Component } from 'react';
import WelcomePage from './pages/WelcomePage';
import CorrectAnswerPage from './pages/CorrectAnswerPage';
import WrongAnswerPage from './pages/WrongAnswerPage';
import QuestionPage from './pages/QuestionPage';
import WinPage from './pages/WinPage';
import TimeIsUpPage from './pages/TimeIsUpPage';
import { Header, HeaderText } from './components/styled/styledComponents';
import OverlayLoader from './components/common/OverlayLoader';
import { INITIAL_GAME_STATE, PAGES, OPEN_TRIVIA_BASE_URL } from "./constants";

class App extends Component {
  state = INITIAL_GAME_STATE;

  // Fetches question data via API and saves it into state
  fetchQuestionData = (categoryId = "", difficulty = "easy") => {
    this.setState({ isLoading: true });
    const numOfQuestions = 10;
    // Open Trivia DB API Reference: https://opentdb.com/api_config.php
    const url = OPEN_TRIVIA_BASE_URL +
      `?amount=${numOfQuestions}&category=${categoryId}&difficulty=${difficulty}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
  
        if (data.results.length === 0) {
          this.setState({
            isLoading: true
          });
          window.alert("No questions for this category! Please choose another one or try again later.");
        } else {
          this.setState({
            currentPage: PAGES.QUESTION_PAGE,
            questions: data.results,
            numOfQuestions: data.results.length,
            isLoading: false,
            indexOfCurrentQuestion: 0,
            currentQuestion: data.results[0]
          })
        }

      })
      .catch(err => console.error(err.message));
  };

  resetGame = () => {
    this.setState(INITIAL_GAME_STATE);
  };

  handleAnswer = (answer, remainingSeconds) => {
    const correctAnswer = this.state.currentQuestion.correct_answer;
    if (answer === correctAnswer) {
      const pointsForQuestion = 50 + remainingSeconds * 10;
      this.setState(prevState => ({
        currentPage: (prevState.numOfCorrectAnswers + 1 === prevState.numOfQuestions) ? PAGES.WIN_PAGE : PAGES.CORRECT_ANSWER_PAGE,
        totalPoints: prevState.totalPoints + pointsForQuestion,
        lastEarnedPoints: pointsForQuestion,
        numOfCorrectAnswers: prevState.numOfCorrectAnswers + 1
      }));
    } else {
      this.setState({
        currentPage: PAGES.WRONG_ANSWER_PAGE
      });
    }
  }

  handleTimeOver = () => {
    this.setState({
      currentPage: PAGES.TIMES_UP_PAGE
    });
  };

  getNextQuestion = () => {
    this.setState(prevState => ({
      indexOfCurrentQuestion: prevState.indexOfCurrentQuestion + 1,
      currentQuestion: prevState.questions[prevState.indexOfCurrentQuestion + 1],
      currentPage: PAGES.QUESTION_PAGE
    }))
  }

  render() {
    const { currentPage, numOfQuestions, indexOfCurrentQuestion } = this.state;
    const questionNumber = indexOfCurrentQuestion + 1; //prevent-off-by-one

    let currentComponent = null;
    let headerContent = <HeaderText>React Trivia Game</HeaderText>;

    if (currentPage === PAGES.WELCOME_PAGE) {
      currentComponent = (
        <WelcomePage startGame={this.fetchQuestionData} />
      );
    }

    if (currentPage === PAGES.QUESTION_PAGE) {
      headerContent = `Question ${questionNumber} / ${numOfQuestions}`;
      currentComponent = (
        <QuestionPage
          data={this.state.currentQuestion}
          handleAnswer={this.handleAnswer}
          handleTimeOver={this.handleTimeOver}
        />
      );
    }

    if (currentPage === PAGES.CORRECT_ANSWER_PAGE) {
      headerContent = `Question ${questionNumber} / ${numOfQuestions}`;
      currentComponent = (
        <CorrectAnswerPage
          goNextQuestion={this.getNextQuestion}
          totalPoints={this.state.totalPoints}
          lastEarnedPoints={this.state.lastEarnedPoints}
        />
      );
    }

    if (currentPage === PAGES.WRONG_ANSWER_PAGE) {
      headerContent = `Question ${questionNumber} / ${numOfQuestions}`;
      currentComponent = (
        <WrongAnswerPage
          numOfCorrectAnswers={this.state.numOfCorrectAnswers}
          totalPoints={this.state.totalPoints}
          resetGame={this.resetGame}
        />
      );
    }

    if (currentPage === PAGES.TIMES_UP_PAGE) {
      headerContent = `Time's Up!`;
      currentComponent = (
        <TimeIsUpPage
          totalPoints={this.state.totalPoints}
          resetGame={this.resetGame}
        />
      );
    }

    if (currentPage === PAGES.WIN_PAGE) {
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
        {this.state.isLoading && <OverlayLoader />}
        {currentComponent}
      </div>
    );
  }
}

export default App;
