import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ComponentInterface } from '@src/types';
import { Overlay } from './Overlay';
import { withTheme } from '@src/hocs';

export interface BackgroundInterface extends ComponentInterface {
  src?: string;
  alt?: string;
  overlay?: boolean;
}

const animatedGradient = keyframes`
    0% {background-position:0% 50%;}
    50% {background-position:100% 50%;}
    100% {background-position:0% 50%;}
`;

const BackgroundComponent = ({ children, overlay, src, theme, ...rest }: BackgroundInterface) => (
  <div role="img" {...rest}>
    {children}
    {overlay && <Overlay />}
  </div>
);

const BackgroundStyled = styled(BackgroundComponent)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;

  /**
    If the image is a custom component, it might require some styling to fit correctly
    */
  ${({ src, children }: BackgroundInterface) => {
    if (!children && !src) {
      return css`
        background: linear-gradient(
          ${`${Math.floor(Math.random() * (275 - 150 + 1)) + 150}deg`},
          ${({ theme }) => theme.colors.brand400} 0%,
          ${({ theme }) => theme.colors.brand500} 25%,
          ${({ theme }) => theme.colors.brand700} 120%
        );
        background-size: 400% 400%;
        animation: ${animatedGradient} 25s linear infinite;
      `;
    } else if (src) {
      return css`
        background-image: ${`url(${src})`};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `;
    }
  }}
`;

export const Background = withTheme(BackgroundStyled);
