import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fill-available;
  height: -webkit-fill-available;
`;

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

const Bar = styled.div`
  background-color: black;
  width: 5px;
  height: 50px;
  margin: 2px;
  border-radius: 10px;
  display: inline-block;
  animation: ${scale} 2s ${({ time }) => time}s infinite
    cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
`;

const ScaleLoader = () => (
  <SpinnerWrapper>
    <div>
      <Bar time={0.1} />
      <Bar time={0.2} />
      <Bar time={0.3} />
      <Bar time={0.4} />
      <Bar time={0.5} />
    </div>
  </SpinnerWrapper>
);

export default ScaleLoader;
