import { useContext } from 'react';
import ViewportContext, { ViewportContextInterface } from '@theme/ViewportContext';

export default (): ViewportContextInterface => {
  const { width, height } = useContext(ViewportContext);
  return { width, height };
};
