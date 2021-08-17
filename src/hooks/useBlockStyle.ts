import { useContext } from 'react';
import { BlockContext } from '@components/layout/FlexGrid/BlockContext';
import { ContextVariant, Variant } from '@components/types';

export default (variant: Variant, variantMap: Record<ContextVariant, Variant>): Variant => {
  const blockContextVariant = useContext(BlockContext);

  const componentVariant: Variant =
    !variant && blockContextVariant ? variantMap[blockContextVariant] : variant;

  return componentVariant;
};
