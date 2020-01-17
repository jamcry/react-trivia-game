import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animation/loader-animation.json';
import { AbsoluteOverlayContainer } from '../styled/styledComponents.js';

const OverlayLoader = () => {
  return (
    <AbsoluteOverlayContainer>
      <Lottie options={{ animationData: animationData.default }} />
    </AbsoluteOverlayContainer>
  );
};

export default OverlayLoader;
