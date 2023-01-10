import { ElementType, PropsWithChildren, useContext } from 'react';

import { FlexGridContainer } from '@src/FlexGridContainer';
import { DEFAULT_MAX_WIDTH } from '@src/constants';

import { FlexWrap } from '..';
import { BlockSetContext } from './BlockSetContext';

export const BlockSetContent: ElementType<PropsWithChildren<{ extend?: Boolean }>> = ({
  children,
  extend,
}) => {
  const { maxWidth = DEFAULT_MAX_WIDTH } = useContext(BlockSetContext);

  const blocksContent = <FlexWrap>{children}</FlexWrap>;
  return Boolean(extend) ? (
    blocksContent
  ) : (
    <FlexGridContainer $maxWidth={maxWidth}>{blocksContent}</FlexGridContainer>
  );
};
