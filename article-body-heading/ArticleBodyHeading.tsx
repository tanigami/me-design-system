import React from 'react';
import '../tokens/variables.css';
import './style.css';
import data from '../sd-input/src/sd-input.json';

const heading = data.article.body.heading;
// console.log(typography);
const style = {
  fontSize: heading.fontSize.value,
  lineHeight: heading.lineHeight.value,
};

export default ({ children }) => {
  return <h1 style={style}>{children}</h1>;
};
