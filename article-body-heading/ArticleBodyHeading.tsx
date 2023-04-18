import React from 'react';
import '../tokens/variables.css';
import data from '../sd-input/src/sd-input.json';

export default ({ level, children }) => {
  const heading = data.article.body.heading;
  // console.log(typography);
  const style = {
    fontSize: heading.typography.fontSize.value,
    lineHeight: heading.typography.lineHeight.value,
  };
  const Heading = `h${level}`;
  return <Heading style={style}>{children}</Heading>;
};
