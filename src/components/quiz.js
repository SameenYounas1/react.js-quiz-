import React, { useState } from 'react';
import QuestionList from './QuestionList';
import './quiz.css';



const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [CurrentAnswer, setCurrentAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the main purpose of a functional component in React?",
      options: [
        "To manage complex state logic",
        "To define a component using a class",
        "To render UI and manage props",
        "To handle lifecycle methods"
      ],
      answer: "To render UI and manage props"
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JavaScript XSLT",
        "JavaScript Extension"
      ],
      answer: "JavaScript XML"
    },
    {
      question: "Which hook is used to manage state in a functional component?",
      options: [
        "useEffect",
        "useState",
        "useContext",
        "useReducer"
      ],
      answer: "useState"
    },
    {
      question: "What are props in React?",
      options: [
        "Functions that return JSX",
        "Components that manage state",
        "Arguments passed into React components",
        "Methods for handling events"
      ],
      answer: "Arguments passed into React components"
    },
    {
      question: "Which method is called after a component is rendered for the first time?",
      options: [
        "componentDidMount",
        "componentWillUnmount",
        "componentDidUpdate",
        "shouldComponentUpdate"
      ],
      answer: "componentDidMount"
    },
    {
      question: "Which React hook is used for side effects?",
      options: [
        "useEffect",
        "useRef",
        "useMemo",
        "useCallback"
      ],
      answer: "useEffect"
    },
    {
      question: "Which package is commonly used for routing in React applications?",
      options: [
        "react-redux",
        "react-router-dom",
        "redux-saga",
        "react-navigation"
      ],
      answer: "react-router-dom"
    },
    {
      question: "What is the purpose of Redux in a React application?",
      options: [
        "To handle HTTP requests",
        "To manage global state",
        "To create components",
        "To style components"
      ],
      answer: "To manage global state"
    },
    {
      question: "What is the Virtual DOM in React?",
      options: [
        "A copy of the real DOM that React keeps for efficient updates",
        "A library for managing DOM elements",
        "A method for directly manipulating the real DOM",
        "A template engine for creating HTML"
      ],
      answer: "A copy of the real DOM that React keeps for efficient updates"
    },
    {
      question: "Which syntax is used for conditional rendering in JSX?",
      options: [
        "if-else statements",
        "switch statements",
        "Ternary operators",
        "For loops"
      ],
      answer: "Ternary operators"
    },
    {
      question: "What is React Context used for?",
      options: [
        "For handling component lifecycle",
        "For managing state in functional components",
        "For passing data through the component tree without prop drilling",
        "For handling side effects"
      ],
      answer: "For passing data through the component tree without prop drilling"
    },
    {
      question: "What is the purpose of React.Fragment?",
      options: [
        "To wrap multiple elements without adding extra nodes to the DOM",
        "To define a component using a class",
        "To manage state in class components",
        "To handle asynchronous code"
      ],
      answer: "To wrap multiple elements without adding extra nodes to the DOM"
    },
    {
      question: "How do you bind an event handler in a React class component?",
      options: [
        "Using the bind method in the constructor",
        "Using an arrow function in the render method",
        "Using the bind method in componentDidMount",
        "Using the bind method in componentWillMount"
      ],
      answer: "Using the bind method in the constructor"
    },
    {
      question: "Why are keys important in lists of elements in React?",
      options: [
        "They help identify which items have changed, are added, or removed",
        "They are required for all elements in JSX",
        "They make the elements draggable",
        "They define the order of elements"
      ],
      answer: "They help identify which items have changed, are added, or removed"
    },
    {
      question: "How do you handle form submission in React?",
      options: [
        "Using the onClick event",
        "Using the onChange event",
        "Using the onSubmit event",
        "Using the onInput event"
      ],
      answer: "Using the onSubmit event"
    },
    {
      question: "What is a controlled component in React?",
      options: [
        "A component that manages its own state",
        "A component whose state is controlled by the parent component",
        "A component that does not have state",
        "A component that controls the DOM directly"
      ],
      answer: "A component whose state is controlled by the parent component"
    },
    {
      question: "What is a Higher-Order Component (HOC) in React?",
      options: [
        "A function that returns a new component",
        "A class that extends React.Component",
        "A component that manages state",
        "A hook that handles side effects"
      ],
      answer: "A function that returns a new component"
    },
    {
      question: "What is the purpose of React.memo?",
      options: [
        "To create memoized state variables",
        "To memoize the result of a component rendering",
        "To handle side effects",
        "To manage global state"
      ],
      answer: "To memoize the result of a component rendering"
    },
    {
      question: "What are error boundaries used for in React?",
      options: [
        "To catch JavaScript errors anywhere in their child component tree",
        "To handle event handling errors",
        "To manage asynchronous code",
        "To control the rendering process"
      ],
      answer: "To catch JavaScript errors anywhere in their child component tree"
    },
    {
      question: "What is the purpose of React.StrictMode?",
      options: [
        "To highlight potential problems in an application",
        "To manage state globally",
        "To handle asynchronous operations",
        "To optimize performance"
      ],
      answer: "To highlight potential problems in an application"
    }
  ];
  const handleClick = (option) => {
    setCurrentAnswer(option);

    // Check if the selected option is correct and update the score
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(null);
    } else {
      setQuizCompleted(true); // Mark the quiz as completed
    }
  };

  return (

    <div>
      <h1 className="stylish-h1">REACT.Js QUIZ</h1>

      {!quizCompleted ? (
        <>
          <QuestionList
            question={`Q${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].question}`}
            options={questions[currentQuestionIndex].options}
            handleClick={handleClick}
            CurrentAnswer={CurrentAnswer}
          />

          <button
            className={CurrentAnswer === null ? 'button-disable' : 'button'}
            disabled={CurrentAnswer === null}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </>
      ) : (
        <div className="quiz-completed">
          <h2>Congratulations! You've completed the quiz.</h2>
          <p>Your score: {score} out of {questions.length}</p> {/* Displaying the score */}
          <button className="button" onClick={() => window.location.reload()}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );

}

export default Quiz;
