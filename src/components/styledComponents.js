import styled from "styled-components";
import React from "react";

const CenteredFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(CenteredFlexDiv)`
  flex-direction: column;
  justify-content: flex-start;
  padding: .5rem;
  height: 100%;
`;

const AbsoluteOverlayContainer = styled(CenteredFlexDiv)`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
`;

const Header = styled(CenteredFlexDiv)`
  width: 100%;
  background: #333;
  height: 5rem !important;
  color: white;
  margin-bottom: 1rem;
`;

const HeaderText = styled.h1`
  font-size: 1.4rem;
  letter-spacing: 1px;
`;

const CenteredIcon = styled(CenteredFlexDiv)`
  width: 256px;
  height: 256px;
  margin-top: .5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.4rem;
  margin: .4rem;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  transition: .3s ease-out;
  &:hover {
    cursor: pointer;
  }
`;

const ActionButton = styled(Button)`
  padding: 1.15rem;
  background: rgba(18,133,153, .75);
  color: white;
  border: none;
  letter-spacing: 2px;
  margin-top: 1.25rem;
  width: 100%;
  max-width: 800px;
  &:hover {
    background: rgba(18,133,153, 1);
  }
`;

// Animated Start Button
// Button animations was adapted from: https://www.w3schools.com/howto/howto_css_animate_buttons.asp
const StartButton = styled(ActionButton)`
  transition: all 0.5s;
  span {
    display: inline-block;
    text-transform: uppercase;
    font-size: 18px;
    position: relative;
    transition: 0.3s;
    &:after {
      content: "→";
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: .3s;
    }
  }
  &:hover {
    span {
      padding-right: 25px;
      &:after {
        opacity: 1;
        right: 0;
      }
    }
  }
`;

// Wrapper Component For Start Button
const AnimatedStartButton = ({ text, ...props }) => {
  return <StartButton {...props}><span>{text}</span></StartButton>
};

// Animated Home Button
const HomeButton = styled(ActionButton)`
  transition: all 0.5s;
  span {
    display: inline-block;
    text-transform: uppercase;
    font-size: 18px;
    position: relative;
    transition: 0.3s;
    &:before {
      content: "←";
      position: absolute;
      opacity: 0;
      top: 0;
      left: -20px;
      transition: .3s;
    }
  }
  &:hover {
    span {
      padding-left: 25px;
      &:before {
        opacity: 1;
        left: 0;
      }
    }
  }
`;

// Wrapper Component For Home Button
const AnimatedHomeButton = ({ text, ...props }) => {
  return <HomeButton {...props}><span>{text}</span></HomeButton>
};

const AnswerButton = styled(Button)`
  width: 100%;
  max-width: 800px;
  margin: .5rem 0;
  border: 0;
  background: #999;
  color: white;
  border-bottom: 5px solid #666;
  padding: 1rem;
  &:hover {
    background: #DE6D1D;
    border-color: #9B4C14;
  }
  &:active {
    background: #DEAE1D;
    border-color: #C49404;
    box-shadow: inset 0 0 10px #B38807;
  }
`;

const Text = styled.div`
  line-height: 1.5rem;
  margin: .75rem .5rem .25rem .5rem;
  font-size: ${props => props.big ? "36px" : "16px"};
  font-weight: ${props => props.bold && "bold"};
  color: ${props => props.color};
`;

const QuestionText = styled(Text)`
  margin-bottom: 2.5rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: 800px;
`;

const Select = styled.select`
  width: 100%;
  margin-bottom: .75rem;
  height: 3.5rem;
`;

export {
  CenteredFlexDiv,
  Container,
  AbsoluteOverlayContainer,
  Header,
  HeaderText,
  CenteredIcon,
  Button,
  ActionButton,
  AnswerButton,
  Text,
  QuestionText,
  Form,
  Select,
  AnimatedStartButton,
  AnimatedHomeButton,
  StartButton
};