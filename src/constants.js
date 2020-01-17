// Constant variables for page names
export const PAGES = {
  WELCOME_PAGE: 'WELCOME_PAGE',
  QUESTION_PAGE: 'QUESTION_PAGE',
  CORRECT_ANSWER_PAGE: 'CORRECT_ANSWER_PAGE',
  WRONG_ANSWER_PAGE: 'WRONG_ANSWER_PAGE',
  WIN_PAGE: 'WIN_PAGE',
  TIMES_UP_PAGE: 'TIMES_UP_PAGE'
};

// Base URL of OpenTriviaDB API
export const OPEN_TRIVIA_BASE_URL = 'https://opentdb.com/api.php';

// Initial state for game
export const INITIAL_GAME_STATE = {
  currentPage: PAGES.WELCOME_PAGE,
  questions: [],
  numOfQuestions: 0,
  indexOfCurrentQuestion: -1,
  numOfCorrectAnswers: 0,
  currentQuestion: null,
  totalPoints: 0
};
