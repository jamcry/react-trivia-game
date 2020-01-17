import React, { Component } from 'react'
import {
  Text,
  Select,
  AnimatedStartButton,
  Form
} from "../styled/styledComponents";

class GameSettingsForm extends Component {
  state = {
    category: "",
    difficulty: "easy"
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { category, difficulty } = this.state;
    this.props.handleSubmit(category, difficulty);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Text bold>Select Category</Text>
        <Select name="category" value={this.state.category} onChange={this.handleChange}>
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </Select>

        <Text bold>Select Difficulty</Text>
        <Select name="difficulty" value={this.state.difficulty} onChange={this.handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>

        <AnimatedStartButton
          text="Start"
        />
      </Form>
    )
  }
}

export default GameSettingsForm;