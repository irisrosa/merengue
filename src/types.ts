import React, { CSSProperties, PropsWithChildren, ReactElement } from 'react';

export type BasicComponentProps = PropsWithChildren<{
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

export type BackgroundProps = {
  renderCustomBackground?: () => ReactElement;
  backgroundImage?: ImageType;
};

export interface BlockData extends BackgroundProps {
  blockPadding?: false | string;
  renderContent: () => ReactElement;
  size?: number;
  as?: keyof AllowedTags;
  offset?: number;
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
  | 'ul'
  | 'li'
  | 'p'
  | 'picture'
  | 'section'
  | 'span'
  | 'summary'
>;

export type AllowedProps<T extends keyof AllowedTags> = React.ComponentPropsWithoutRef<T>;

export type GridOptions = {
  blockPadding?: string;
  gap?: 0 | 1 | 2 | 3 | 4;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  maxWidth?: string;
  blockAs?: keyof AllowedTags;
};

export type MerengueData = BackgroundProps &
  GridOptions & {
    blocks?: BlockData[];
    as?: keyof AllowedTags;
    extendBackground?: boolean;
    extendContent?: boolean;
  };

export type BlockSetProps = Omit<MerengueData, keyof GridOptions | 'blocks'>;

export type BlockProps = Partial<BlockData>;

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & { as?: C }> &
  Omit<React.ComponentPropsWithoutRef<C>, 'as'> & {
    ref?: PolymorphicRef<C>;
  };

export type PolymorphicComponent<P> = <E extends React.ElementType = 'div'>(
  props: PolymorphicComponentPropWithRef<E, P>
) => React.ReactElement;
