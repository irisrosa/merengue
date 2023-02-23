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
      as,
      ...props
    }: PolymorphicComponentPropWithRef<C, Omit<BlockSetProps, 'as'>>,
    ref: PolymorphicRef<C>
  ) => {
    const Element = as || 'div';

    const hasBackground = Boolean(backgroundImage) || Boolean(renderCustomBackground);

    const cn = classnames(
      styles.blockset,
      styles[`column${theme.options.columns}`],
      styles[`gap${theme.options.gap}`]
    );

    const inlineStyles = {
      maxWidth: extendContent ? '100%' : theme.options.maxWidth,
    };

    const blockSetProps = {
      className: cn,
      style: inlineStyles,
      ref,
      ...props,
    };

    if (hasBackground && extendBackground) {
      return (
        <div className={classnames(styles.wrapper)}>
          <Background
            renderCustomBackground={renderCustomBackground}
            backgroundImage={backgroundImage}
          />
          <Element {...blockSetProps}>{children}</Element>
        </div>
      );
    }

    return (
      <Element {...blockSetProps}>
        {hasBackground && (
          <Background
            renderCustomBackground={renderCustomBackground}
            backgroundImage={backgroundImage}
          />
        )}

        {children}
      </Element>
    );
  }
);
