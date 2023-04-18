import { css } from '@linaria/core';
import React from 'react';
import '../tokens/variables.css';
import './style.css';

const style = css`
  text-transform: uppercase;
  font-family: ${fonts.heading};
  font-size: ${modularScale(2)};

  ${hiDPI(1.5)} {
    font-size: ${modularScale(2.5)};
  }
`;

export default ({ children }) => {
  return <p className="article-body-paragraph">{children}</p>;
};
