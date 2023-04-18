import { css } from '@linaria/core';
import React from 'react';
import '../tokens/variables.css';
import './style.css';

import data from '../sd-input/src/out.json';

const typography = data['body-typography'].value;

// const color = data

const style = {
  color: data['body-color'].value,
  fontSize: typography.fontSize,
  lineHeight: typography.lineHeight,
};

export default ({ children }) => {
  return <p style={style}>{children}</p>;
};
