import { DOMElement, ElementType, PropsWithChildren } from 'react';

import { CSSProperties, DefaultTheme } from 'styled-components';

export type ComponentProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>;

export type ImageType = {
  [key: string]: unknown;
  alt?: string;
  aspectRatio?: number;
  base64?: string;
  sizes?: string;
  src: string;
  srcSet?: string;
};

interface BackgroundProps {
  BackgroundComponent?: ElementType;
  backgroundImage?: ImageType;
}

export interface BlockData extends BackgroundProps {
  blockPadding?: false | string;
  Content: ElementType;
  size?: number;
}

type AllowedTags = keyof Pick<
  HTMLElementTagNameMap,
  | 'address'
  | 'article'
  | 'aside'
  | 'br'
  | 'colgroup'
  | 'col'
  | 'dl'
  | 'dt'
  | 'dd'
  | 'details'
  | 'div'
  | 'figure'
  | 'footer'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'img'
  | 'main'
  | 'nav'
  | 'ol'
  | 'li'
  | 'p'
  | 'picture'
  | 'section'
  | 'span'
  | 'summary'
>;

export type GridOptions = {
  blockPadding?: false | string;
  gap?: false | string;
  columns?: number;
  maxWidth?: number;
  breakPoints?: {
    small: number;
    large: number;
  };
  domMapping?: {
    wrapper: AllowedTags;
    block: AllowedTags;
  };
};

export type GridData = BackgroundProps &
  GridOptions & {
    blocks: BlockData[];
    // extendBackground?: boolean;
    // extendContent?: boolean;
  };

export type FlexGridProps = ComponentProps & Partial<GridData>;

export type BlockSetProps = ComponentProps;

export type BlockProps = ComponentProps & Omit<BlockData, 'Content'>;
