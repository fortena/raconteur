import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px;
`;

const InnerWrapper = styled.div`
  height: 104px;
`;

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.05)}
  100% {transform: scaley(1.0)}
`;

const Bar = styled.div`
  background-color: black;
  width: 2px;
  height: 100px;
  margin: 2px;
  border-radius: 10px;
  display: inline-block;
  animation: ${scale} 2s ${({ start }) => start}s infinite
    cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
`;

const maxBar = 10;

const ScaleLoader = () => {
  const [bars, setBars] = useState([0.1]);
  const [nextBar, setNextBar] = useState(0.2);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (nextBar <= maxBar) {
        setBars([...bars, nextBar]);
        setNextBar(nextBar + 0.1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [nextBar]);
  return (
    <OuterWrapper>
      <InnerWrapper>
        {bars.map(start => (
          <Bar key={start} start={start * 0.1} />
        ))}
      </InnerWrapper>
      <p>Loading ...</p>
    </OuterWrapper>
  );
};

export default ScaleLoader;
