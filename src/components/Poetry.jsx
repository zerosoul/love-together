import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
const StyledWrapper = styled.div`
  box-shadow: 0 0 8px 2px black;
  background-color: #a98175;
  min-height: 300px;
  font-family: 'FZ Spec';
`;
// eslint-disable-next-line no-unused-vars
let TypedObj = null;
export default function Poetry({ id, currStep, content = '', ...rest }) {
  useEffect(() => {
    console.log({ TypedObj });

    if (currStep == id && !TypedObj) {
      // TypedObj.destory();
      TypedObj = new Typed(`#${id}`, {
        strings: [`${content}`],
        fadeOut: true,
        startDelay: 30,
        typeSpeed: 100
      });
    } else {
      TypedObj = null;
    }
  }, [content, currStep, id]);
  return <StyledWrapper id={id} className="step slide" {...rest}></StyledWrapper>;
}
