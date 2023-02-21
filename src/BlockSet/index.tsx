import React from 'react';

import classnames from 'classnames';

import { Background } from '@src/Background';
import { theme } from '@src/theme';
import {
  BlockSetProps,
  PolymorphicComponent,
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@src/types';

import * as styles from './BlockSet.module.scss';

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

    const cn = classnames(
      styles.blockset,
      styles[`column${theme.options.columns}`],
      styles[`gap${theme.options.gap}`],
      { [styles.extendContent]: extendContent }
    );

    const inlineStyles = {
      maxWidth: theme.options.maxWidth,
    };

    const blockSetProps = {
      className: cn,
      style: inlineStyles,
      ref,
    };

    if (hasBackground && extendBackground) {
      return (
        <div className={classnames(styles.wrapper)}>
          <Background
            renderCustomBackground={renderCustomBackground}
            backgroundImage={backgroundImage}
          />
          <div {...blockSetProps}>{children}</div>
        </div>
      );
    }

    return (
      <div {...blockSetProps}>
        {hasBackground && (
          <Background
            renderCustomBackground={renderCustomBackground}
            backgroundImage={backgroundImage}
          />
        )}

        {children}
      </div>
    );
  }
);
