import { css } from 'styled-components';

export const pureButton = css`
  /* Structure */
  display: inline-block;
  zoom: 1;
  line-height: normal;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  -webkit-user-drag: none;
  user-select: none;
  box-sizing: border-box;
  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
`;

const wordSpacing = css`
  word-spacing: -0.43em;
`;

export const operaOnly = css`
  :-o-prefocus {
    ${wordSpacing}
  }
`;

export const pureButtonGroup = css`
  letter-spacing: -0.31em; /* Webkit: collapse white-space between units */
  *letter-spacing: normal; /* reset IE < 8 */
  *word-spacing: -0.43em; /* IE < 8: collapse white-space between units */
  text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */
  ${wordSpacing}
`;

export const pureButtonInGroup = css`
  letter-spacing: normal;
  word-spacing: normal;
  vertical-align: top;
  text-rendering: auto;
`;
