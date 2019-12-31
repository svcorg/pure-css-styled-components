import { css } from 'styled-components';

const pureButtonDisabledCss = css`
  border: none;
  background-image: none;
  /* csslint ignore:start */
  filter: alpha(opacity=40);
  /* csslint ignore:end */
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
  pointer-events: none;
`;

export const pureButtonDisabled = css`
  ${pureButtonDisabledCss}
  &:hover, &:focus, &:active {
    ${pureButtonDisabledCss}
  }
`;

export const pureButtonHidden = css`
  display: none;
`;

export const pureButtonPrimary = css`
  background-color: rgb(0, 120, 231);
  color: #fff;
`;

export const pureButton = css`
  font-family: inherit;
  font-size: 100%;
  padding: 0.5em 1em;
  color: #444; /* rgba not supported (IE 8) */
  color: rgba(0, 0, 0, 0.8); /* rgba supported */
  border: 1px solid #999; /*IE 6/7/8*/
  border: none rgba(0, 0, 0, 0); /*IE9 + everything else*/
  background-color: #e6e6e6;
  text-decoration: none;
  border-radius: 2px;
  &:hover,
  &:focus {
    background-image: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0.1)
    );
  }
  &:focus {
    outline: 0;
  }
  &:active {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset,
      0 0 6px rgba(0, 0, 0, 0.2) inset;
    border-color: #000;
  }
  &[disabled] {
    ${pureButtonDisabled}
  }
`;

/* Button Groups */
export const pureButtonInGroup = css`
  margin: 0;
  border-radius: 0;
  border-right: 1px solid #111; /* fallback color for rgba() for IE7/8 */
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  &:first-child {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  &:last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-right: none;
  }
`;
