import React, { ComponentType, ElementType } from 'react';
import { PropsWithChildren } from 'react';

type Comp = ComponentType | React.FC | ElementType;

export type OnClickType = () => void;

export type ContextVariant = 'default' | 'dark' | 'light' | 'highlight';

export type Variant = 'white' | 'primary';

export interface ComponentProps {
  theme?: string; // TODO
  className?: string;
  style?: Record<string, unknown>;
}

export type ComponentInterface = PropsWithChildren<ComponentProps>;

export type ComponentPropsWithVariants = ComponentInterface & {
  variant?: Variant;
};

export type ImageType = {
  alt?: string;
  src: string;
  srcSet?: string;
  sizes?: string;
  base64?: string;
  aspectRatio?: number;
  [key: string]: unknown;
};

export interface BlockData {
  Component: Comp;
  style?: ContextVariant;
  size?: number;
  backgroundImage?: ImageType;
  noBackground?: boolean;
  [key: string]: unknown;
}

export interface BlockSetData {
  bleedContent?: boolean;
  bleedBackground?: boolean;
  blocks: BlockData[];
  blockPadding?: boolean;
  BgComp?: Comp;
}

export interface GridInterface extends ComponentInterface {
  data: BlockSetData[];
}

export interface BlockSetInterface
  extends Pick<ComponentInterface, 'theme' | 'className' | 'children'>,
    Pick<BlockSetData, 'blockPadding' | 'bleedContent' | 'bleedBackground' | 'BgComp'> {
  blockSetStyle?: ContextVariant;
  blocks?: BlockData[];
  backgroundImage?: ImageType;
}

export interface BlockInterface
  extends Pick<ComponentInterface, 'theme' | 'className' | 'children'>,
    Pick<BlockData, 'size' | 'backgroundImage'> {
  noPadding?: boolean;
  blockStyle?: ContextVariant;
  position?: number;
  noBackground?: boolean;
  BgComp?: Comp;
}

export type BlockSetContextType = Pick<BlockData, 'style'> &
  Pick<BlockSetData, 'blockPadding' | 'BgComp'> & { hasCustomBg?: boolean };

export type BlockContextType = ContextVariant;
