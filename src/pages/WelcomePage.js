import React, { Component } from 'react'
import {
  Container,
  CenteredIcon,
  Text,
  Select,
  AnimatedStartButton,
  AnimatedHomeButton
} from "../components/styledComponents";

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
        <Select>
          <option>Category 1</option>
          <option>Category 2</option>
        </Select>

        <Text bold>Select Difficulty</Text>
        <Select>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </Select>
        <AnimatedStartButton
          text="Start"
          onClick={this.props.startGame}
        />
      </Container>
    );
  }
};

export default WelcomePage;