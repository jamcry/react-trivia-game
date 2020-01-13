import React, { Component } from 'react'
import {
  Container,
  CenteredIcon,
  Text,
  ActionButton
} from "../components/styledComponents";
import logo from "../logo.svg";

import Lottie from 'react-lottie';
import * as animationData from "../assets/trivia-animation.json";

class WelcomePage extends Component {
  state = {}


  render() {
    const lottieDefaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid'
      }
    };

    return (
      <Container>
        <CenteredIcon>
          <Lottie options={lottieDefaultOptions}/>
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
        <ActionButton onClick={this.props.startGame}>START</ActionButton>
      </Container>
    );
  }
};

export default WelcomePage;