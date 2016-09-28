/* eslint-ignore max-len */
import React, { PropTypes } from 'react';
import classes from './Social.scss';

const Social = (props) => {
  let className = classes.social;
  if (props.secondary) className += ` ${classes.secondary}`;
  if (props.className) className += ` ${props.className}`;

  return (
    <div className={className}>
      <a href="https://www.facebook.com/jimberefund/">
        <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
        </svg>
      </a>
      <a href="https://twitter.com/JimbereFund">
        <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
        </svg>
      </a>
    </div>
  );
};

Social.propTypes = {
  className: PropTypes.string,
  secondary: PropTypes.bool
};

export default Social;
