import { ElementType } from 'react';

import { BackgroundProps, ImageType } from '@src/types';

import * as styles from './Background.module.scss';

const BackgroundComponent = ({ overlay, src }: Pick<ImageType, 'src'> & { overlay?: Boolean }) => {
  const inlineStyles = {
    backgroundImage: `url(${src})`,
  };

  return (
    <div role="img" className={styles.background} style={inlineStyles}>
      {overlay && <div className={styles.overlay} />}
    </div>
  );
};

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
