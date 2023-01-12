import { ElementType, PropsWithChildren } from 'react';

import { FlexGridContainer } from '@src/FlexGridContainer';

export const BlockSetContent: ElementType<PropsWithChildren<{ extend?: Boolean }>> = ({
  children,
  extend,
}) => {
  // const blocksContent = <>{children}</>;
  // return Boolean(extend) ? blocksContent : <FlexGridContainer>{blocksContent}</FlexGridContainer>;
  return <FlexGridContainer>{children}</FlexGridContainer>;
};
