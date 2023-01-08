import React from 'react';

import styled, { css, keyframes } from 'styled-components';

import { ComponentProps } from '@src/types';

import { Overlay } from './Overlay';

export interface BackgroundInterface extends ComponentProps {
  src?: string;
  alt?: string;
  overlay?: boolean;
}

const BackgroundComponent = ({ children, overlay, src, ...rest }: BackgroundInterface) => (
  <div role="img" {...rest}>
    {children}
    {overlay && <Overlay />}
  </div>
);

export const Background = styled(BackgroundComponent)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  /**
    If the image is a custom component, it might require some styling to fit correctly
    */
  ${({ src, children }: BackgroundInterface) => {
    if (!children && !src) {
      return css`
        background: lightgrey;
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
