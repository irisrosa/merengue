import React from 'react';

import classNames from 'classnames';

import { theme } from '@src/theme';
import {
  BlockSetProps,
  PolymorphicComponent,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@src/types';

import { default as styles } from './BlockSet.module.scss';

// const convertRemToPixels: (arg: string | false) => number = rem =>
//   rem ? parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize) : 1;

// const BlockSetStyled = styled.div<BlockSetProps>`
//   position: relative;
//   display: grid;
//   gap: ${({ theme }) => theme.gap && `${theme.gap}`};
//   grid-template-columns: repeat(${({ theme }) => theme.columns}, 1fr);

//   @media (min-width: ${({ theme }) => theme.breakPoints.large}px) {
//     max-width: ${({ theme, extendContent, extendBackground }) =>
//       extendContent || extendBackground ? '100%' : theme.maxWidth}px;

//     ${({ theme, extendBackground }) =>
//       extendBackground &&
//       css`
//         grid-template-columns: repeat(
//           ${theme.columns},
//           ${Math.floor(
//             (theme.maxWidth - (theme.columns - 1) * convertRemToPixels(theme.gap)) / theme.columns
//           )}px
//         );
//         justify-content: center;
//       `}
//   }

//   width: 100%;
//   margin: 0 auto;
// `;

const convertRemToPixels: (arg: string | false) => number = rem =>
  rem ? parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize) : 1;

export const BlockSet: PolymorphicComponent<BlockSetProps> = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      children,
      renderCustomBackground,
      backgroundImage,
      extendBackground,
      extendContent,
    }: PolymorphicComponentPropWithRef<C, BlockSetProps>,
    ref: PolymorphicRef<C>
  ) => {
    const hasBackground = Boolean(backgroundImage) || Boolean(renderCustomBackground);

    const cns = classNames(styles['block-set'], {
      [styles['extend']]: extendContent || extendBackground,
      [styles['extend-bg']]: extendBackground,
    });

    console.log('3', theme.options);
    const { gap, columns, breakPoints, maxWidth } = theme.options;

    console.log({ extendBackground, extendContent });
    let customStyle = {};
    if (!extendContent && extendBackground) {
      customStyle['gridTemplateColumns'] = `repeat(${columns}, ${
        Math.floor(maxWidth - (columns - 1) * convertRemToPixels(gap)) / columns
      }px)`;
    }

    console.log(customStyle);

    return (
      <div ref={ref} className={cns} style={customStyle}>
        {/* {hasBackground && (
          <Background
            renderCustomBackground={renderCustomBackground}
            backgroundImage={backgroundImage}
          />
        )} */}

        {children}
      </div>
    );
  }
);
