import React, { ComponentPropsWithRef, ElementType } from 'react';

export type ComponentProps = ComponentPropsWithRef<ElementType>;

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
  as?: keyof AllowedTags;
}

export type AllowedTags = Pick<
  HTMLElementTagNameMap,
  | 'address'
  | 'a'
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

export type AllowedProps<T extends keyof AllowedTags> = React.ComponentPropsWithoutRef<T>;

export type GridOptions = {
  blockPadding?: false | string;
  gap?: false | string;
  columns?: number;
  maxWidth?: number;
  breakPoints?: {
    small: number;
    large: number;
  };
};

export type GridData = BackgroundProps &
  GridOptions & {
    blocks: BlockData[];
    as?: keyof AllowedTags;
    // extendBackground?: boolean;
    // extendContent?: boolean;
  };

export type FlexGridProps = ComponentProps & Partial<GridData>;

export type BlockSetProps = ComponentProps;

export type BlockProps = ComponentProps & Omit<BlockData, 'Content'>;

/**
 * Based on https://github.com/kripod/react-polymorphic-box
 */
export type PolymorphicComponent<P> = <E extends React.ElementType = 'div'>(
  props: P & { as?: E } & Omit<React.ComponentPropsWithRef<E>, 'as'>
) => React.ReactElement;
