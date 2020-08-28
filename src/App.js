import React, { useEffect, useState } from 'react';
import 'impress.js';
import styled from 'styled-components';
import Navs from './components/Navs';
import StartMask from './components/StartMask';
import LoveDuration from './components/slides/LoveDuration';
// import Letter from './components/slides/Letter';
const StyledBody = styled.section`
  min-height: 740px;
  opacity: 0;
  transition: opacity 1s;
  &.start {
    opacity: 1;
  }
  .step {
    position: relative;
    width: 900px;
    padding: 40px;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 48px;
    line-height: 1.5;
  }
`;
const App = () => {
  const [start, setStart] = useState(false);
  const [currStep, setCurrStep] = useState('');
  useEffect(() => {
    const rootElement = document.getElementById('impress');
    rootElement.addEventListener('impress:init', function () {
      console.log('Impress init');
    });
    rootElement.addEventListener('impress:stepenter', function (event) {
      var currentStep = event.target;
      console.log("Entered the Step Element '" + currentStep.id + "'");
      setCurrStep(currentStep.id);
    });
    if (start) {
      window.impress().init();
    }
  }, [start]);
  const handleStart = () => {
    setStart(true);
  };
  return (
    <>
      {!start && <StartMask startPlay={handleStart} />}
      {/* {start && (
        <Navs
          goNext={() => {
            window.impress().next();
          }}
          goPrev={
            currStep == 'love-dur'
              ? null
              : () => {
                  window.impress().prev();
                }
          }
        />
      )} */}
      <StyledBody className={start ? 'start' : ''} id="impress">
        <LoveDuration />
        {/* <Letter step={currStep} /> */}
      </StyledBody>
    </>
  );
};
export default App;
