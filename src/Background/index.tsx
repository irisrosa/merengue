import { ElementType } from 'react';

// const BackgroundStyled = styled(BackgroundComponent)`
import { BackgroundProps, BasicComponentProps } from '@src/types';

import * as styles from './Background.module.scss';

export interface BackgroundInterface extends BasicComponentProps {
  src?: string;
  alt?: string;
  overlay?: boolean;
}

const BackgroundComponent = ({ children, overlay, src, ...rest }: BackgroundInterface) => (
  <div role="img" className={styles.background} {...rest}>
    {children}
    {overlay && <div className={styles.overlay} />}
  </div>
);

export const Background: ElementType<BackgroundProps> = ({
  renderCustomBackground,
  backgroundImage,
}) => {
  const imageBackground = Boolean(backgroundImage) && (
    <BackgroundComponent overlay {...backgroundImage} />
  );
  const customBackground = Boolean(renderCustomBackground) && renderCustomBackground();

  return (
    <>
      {customBackground}
      {imageBackground}
    </>
  );
};
