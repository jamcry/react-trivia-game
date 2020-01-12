import React from 'react';
import WelcomePage from './pages/WelcomePage';
import CorrectAnswerPage from './pages/CorrectAnswerPage';
import WrongAnswerPage from './pages/WrongAnswerPage';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <div className="App">
      <WelcomePage />
      <CorrectAnswerPage />
      <WrongAnswerPage />
      <QuestionPage />
    </div>
  );
}

export default App;
