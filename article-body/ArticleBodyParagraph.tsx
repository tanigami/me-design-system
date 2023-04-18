import React from 'react';
import '../tokens/variables.css';
import './style.css';
import data from '../sd-input/src/out.json';

const typography = data['body-typography'].value;

const style = {
  fontSize: typography.fontSize,
  lineHeight: typography.lineHeight,
  marginBottom: typography.paragraphSpacing,
};

export default ({ children }) => {
  return <p style={style}>{children}</p>;
};
