import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from "../assets/loader-animation.json";
import styled from 'styled-components';
import { CenteredFlexDiv } from './styledComponents.js';

const OverlayLoader = () => {
  const OverlayLoaderContainer = styled(CenteredFlexDiv)`
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
  `;

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    width: '100%',
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid'
    }
  };

  return (
    <OverlayLoaderContainer>
      <Lottie options={lottieDefaultOptions} />
    </OverlayLoaderContainer>
  );
}

export default OverlayLoader;