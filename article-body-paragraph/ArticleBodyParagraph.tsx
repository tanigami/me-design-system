import React from 'react';
import '../tokens/variables.css';
import data from '../sd-input/src/sd-input.json';

const paragraph = data.article.body.paragraph;
// console.log(typography);
const style = {
  fontSize: paragraph.color.value,
  lineHeight: paragraph.typography.lineHeight.value,
  letterSpacing: paragraph.typography.letterSpacing.value,
  marginBottom: paragraph.typography.paragraphSpacing.value,
};

export default ({ children }) => {
  return <p style={style}>{children}</p>;
};
