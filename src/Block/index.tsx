import React from 'react';

import classNames from 'classnames';

import { Background } from '@src/Background';
import { theme } from '@src/theme';
import {
  BlockProps,
  PolymorphicComponent,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@src/types';

import * as styles from './Block.module.scss';

export const Block: PolymorphicComponent<BlockProps> = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      renderCustomBackground,
      backgroundImage,
      children,
      offset,
      size,
      blockPadding,
    }: PolymorphicComponentPropWithRef<C, BlockProps>,
    ref: PolymorphicRef<C>
  ) => {
    const hasBackground = Boolean(backgroundImage) || Boolean(renderCustomBackground);

    const cn = classNames(styles.block, styles[`gridColumn${size}`]);
    const inlineStyles = {
      padding: blockPadding || theme.options.blockPadding,
    };

    const blockProps = {
      className: cn,
      style: inlineStyles,
      ref,
    };

    return (
      <>
        {Boolean(offset) &&
          Array(offset)
            .fill(0)
            .map(() => <div {...blockProps} />)}
        <div {...blockProps}>
          {hasBackground ? (
            <>
              <Background
                renderCustomBackground={renderCustomBackground}
                backgroundImage={backgroundImage}
              />
              <div className={styles.blockContent}>{children}</div>
            </>
          ) : (
            children
          )}
        </div>
      </>
    );
  }
);
