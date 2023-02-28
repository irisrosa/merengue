# Merengue

Merengue is a small library of React components to facilitate creating page grids.

## Usage

```
<MerengueBox>
  <Block>...</Block>
  <Block>...</Block>
  <Block>...</Block>
</MerengueBox>
```

or 

```
<MerengueBox blocks={[]} />
```

----

## MerengueBox Props

All properties are optional.

### blockPadding
To control whether blocks should have a padding applied. This can be overwritten for each block. Default value is `'0px'`.

### gap
Set the gap value between the grid elements. It's represented in `rem` values. Default value is `1`. Possible values are `0 | 1 | 2 | 3 | 4`. 

### columns
Desired number of columns of the page grid. Each block will extend, by default, to 1/x of the width of the columns value. Default value is `4`. Possible values are `1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12`.

### maxWidth
Maximum width of the grid. Default value is `'960px;'`. This value is applied as a inline style and can be overwritten using different units. 

Note: if `extendContent` is set to `true` the value of `maxWidth` is ignored. 

### blockAs
HTML tag used to build the blocks. Default value is `div`. 

Allowed values are:

```  
 'address'  | 'a'  | 'article'  | 'aside'  | 'br'  | 'colgroup'  | 'col'  | 'dl'  | 'dt'  | 'dd'  | 'details'  | 'div'  | 'figure'  | 'footer'  | 'h1'  | 'h2'  | 'h3'  | 'h4'  | 'h5'  | 'h6'  | 'header'  | 'img'  | 'main'  | 'nav'  | 'ol'  | 'ul'  | 'li'  | 'p'  | 'picture'  | 'section'  | 'span'  | 'summary'
```

### as
HTML tag used for the grid wrapper. Default value is `div`.

Allowed values are:

```  
 'address'  | 'a'  | 'article'  | 'aside'  | 'br'  | 'colgroup'  | 'col'  | 'dl'  | 'dt'  | 'dd'  | 'details'  | 'div'  | 'figure'  | 'footer'  | 'h1'  | 'h2'  | 'h3'  | 'h4'  | 'h5'  | 'h6'  | 'header'  | 'img'  | 'main'  | 'nav'  | 'ol'  | 'ul'  | 'li'  | 'p'  | 'picture'  | 'section'  | 'span'  | 'summary'
```

### blocks
Representation of the blocks as an array of objects. If used together with `children` both will be displayed; the blocks passed via `blocks` prop first followed by `children` next.

Example:

```
<MerengueBox blocks={[
  {
    renderContent: () => <p>This is a block.</p>,
    ...
  }
]} />
```

For details refer to the blocks properties list below.

### extendBackground
If the background of grid should extend beyond the limitation of `maxWidth`. Default value is `false`.

### extendContent
If the grid should extend beyond the limitation of `maxWidth` and use all available space. Default value is `false`.

### style
### className
### renderCustomBackground
### backgroundImage

-----

## Block Props
All properties are optional.

### blockPadding
To control whether blocks should have a padding applied. This can be overwritten for each block. Default value is `'0px'`.

### as
HTML tag used for the grid wrapper. Default value is `div`.

Allowed values are:

```  
 'address'  | 'a'  | 'article'  | 'aside'  | 'br'  | 'colgroup'  | 'col'  | 'dl'  | 'dt'  | 'dd'  | 'details'  | 'div'  | 'figure'  | 'footer'  | 'h1'  | 'h2'  | 'h3'  | 'h4'  | 'h5'  | 'h6'  | 'header'  | 'img'  | 'main'  | 'nav'  | 'ol'  | 'ul'  | 'li'  | 'p'  | 'picture'  | 'section'  | 'span'  | 'summary'
```

### size
Number of columns the block occupies in a row. Default value is `1`. 

### offset
Number of columns empty placed before the block. Default value is `0`.

### renderContent
React component rendered as `children` of the block component.

Note: This prop is only used and is required when the block is passed via `blocks` prop to the MerengueBox.

### style
### className
### renderCustomBackground
### backgroundImage