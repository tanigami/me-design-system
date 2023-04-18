import React from 'react';
import '../tokens/variables.css';
import './style.css';
import data from '../sd-input/src/sd-input.json';

const typography = data.article.body.paragraph.typography;
console.log(typography);
const style = {
  color: data['body-color'].value,
  fontSize: typography.fontSize.value,
  lineHeight: typography.lineHeight.value,
  letterSpacing: typography.letterSpacing.value,
  marginBottom: typography.paragraphSpacing.value,
};

export default ({ children }) => {
  return <p style={style}>{children}</p>;
};
