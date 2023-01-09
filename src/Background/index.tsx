import React, { ElementType } from 'react';

import styled, { css, keyframes } from 'styled-components';

import { ComponentProps, ImageType } from '@src/types';

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

const BackgroundStyled = styled(BackgroundComponent)`
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

export const Background: ElementType<{ CustomComponent?: ElementType; image?: ImageType }> = ({
  CustomComponent,
  image,
}) => {
  const imageBackground = Boolean(image) && (
    <BackgroundStyled data-testid="background-image" overlay {...image} />
  );
  const customBackground = Boolean(CustomComponent) && (
    <CustomComponent data-testid="background-comp" />
  );

  return (
    <>
      {(customBackground || imageBackground) && (
        <div
          style={{
            position: 'static',
          }}
        >
          {customBackground}
          {imageBackground}
        </div>
      )}
    </>
  );
};
