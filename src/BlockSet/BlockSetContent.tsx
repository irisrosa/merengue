import { ElementType, PropsWithChildren } from 'react';

import { FlexGridContainer } from '@src/FlexGridContainer';

import { FlexWrap } from '..';

export const BlockSetContent: ElementType<PropsWithChildren<{ extend?: Boolean }>> = ({
  children,
  extend,
}) => {
  const blocksContent = <FlexWrap>{children}</FlexWrap>;
  return Boolean(extend) ? blocksContent : <FlexGridContainer>{blocksContent}</FlexGridContainer>;
};
