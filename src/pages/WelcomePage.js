import React, { Component } from 'react'
import {
  Container,
  Header,
  CenteredIcon,
  Text,
  ActionButton
} from "../components/styledComponents";
import logo from "../logo.svg";

class WelcomePage extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Header>
          <Text bold>React Trivia</Text>
        </Header>
        <CenteredIcon>
          <img src={logo} className="App-logo" alt="logo" />
        </CenteredIcon>
        <Text bold>Select Category</Text>
        <select>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>

        <Text bold>Select Difficulty</Text>
        <select>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <ActionButton>START</ActionButton>
      </Container>
    );
  }
};

export default WelcomePage;