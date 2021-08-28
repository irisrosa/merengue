import React, { ComponentType, ReactElement } from 'react';
import { useTheme } from '@src/hooks';
import { ComponentInterface } from '@src/types';

/**
 * Adds the theme obj as a prop theme to the WrappedComponent
 *
 * @param WrappedComponent
 */
const withTheme = <P extends ComponentInterface>(WrappedComponent: ComponentType<P>) => (
  props: P
): ReactElement<P> => {
  const themeObj = useTheme(props.theme);
  return <WrappedComponent {...props} theme={themeObj} />;
};

export default withTheme;
