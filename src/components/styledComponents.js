import styled from "styled-components";
import React from "react";

const CenteredFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(CenteredFlexDiv)`
  flex-direction: column;
  padding: .5rem;
  height: 100%;
`;

const Header = styled(CenteredFlexDiv)`
  width: 100%;
  background: #333;
  min-height: 3rem;
  color: white;
  margin-bottom: 1rem;
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
  padding: 0.4rem 2.5rem;
  background: rgba(18,133,153, .75);
  color: white;
  border: none;
  letter-spacing: 2px;
  margin-top: 1.25rem;
  width: 80%;
  max-width: 256px;
  &:hover {
    background: rgba(18,133,153, 1);
  }
`;

// Animated Start Button
const StartButton = styled(ActionButton)`
  transition: all 0.5s;
  padding: 1.15rem ;
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

// Animated Home Button
const HomeButton = styled(ActionButton)`
  transition: all 0.5s;
  padding: 1.15rem ;
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

// Wrapper Component For Start Button
const AnimatedStartButton = ({ text, ...props }) => {
  return <StartButton {...props}><span>{text}</span></StartButton>
};

// Wrapper Component For Home Button
const AnimatedHomeButton = ({ text, ...props }) => {
  return <HomeButton {...props}><span>{text}</span></HomeButton>
};

const AnswerButton = styled(Button)`
  width: 100%;
  max-width: 400px;
  margin: .4rem 0;
  border: 0;
  background: #999;
  color: white;
  border-bottom: 3px solid #666;
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
  line-height: 1.7rem;
  font-size: 16px;
  font-weight: ${props => props.bold && "bold"};
  color: ${props => props.color};
  font-size: ${props => props.big && "36px"};
`;

const Select = styled.select`
  width: 80%;
  max-width: 256px;
  margin-bottom: .75rem;
`;

export {
  CenteredFlexDiv,
  Container,
  Header,
  CenteredIcon,
  Button,
  ActionButton,
  AnswerButton,
  Text,
  Select,
  AnimatedStartButton,
  AnimatedHomeButton,
  StartButton
};