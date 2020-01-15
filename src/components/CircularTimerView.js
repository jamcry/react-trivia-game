import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const TimerContainer = styled.div`
  width: 5rem;
  height: 5rem;
  margin-bottom: 1.5rem;
`;

const CircularTimerView = ({ duration, remaining }) => {
  // Calculate the percentage of the remaining seconds
  const percentage = ((remaining / duration) * 100);

  // Color turns red below 25% of the duration remaining
  const colorRGB = (percentage < 25) ? "255,0,0" : "62,152,199";

  // Define style rules for CircularProgressBar
  const barStyles = {
    path: {
      stroke: `rgba(${colorRGB})`,
    },
    text: {
      fill: `rgb(${colorRGB})`,
      fontSize: '2.5rem'
    }
  };

  return (
    <TimerContainer>
      <CircularProgressbar
        value={percentage}
        text={remaining}
        styles={barStyles}
      />
    </TimerContainer>
  );
}

export default CircularTimerView;