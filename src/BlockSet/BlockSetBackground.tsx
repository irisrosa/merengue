import { ElementType } from 'react';

import { Background as BackgroundComponent } from '@src/Background';
import { ImageType } from '@src/types';

export const BlockSetBackground: ElementType<{ CustomComponent?: ElementType; image?: ImageType }> =
  ({ CustomComponent, image }) => {
    const imageBackground = Boolean(image) && (
      <BackgroundComponent data-testid="blockset-background-image" overlay {...image} />
    );
    const customBackground = Boolean(CustomComponent) && (
      <CustomComponent data-testid="blockset-background-comp" />
    );

    return (
      <>
        {(customBackground || imageBackground) && (
          <div
            data-testid="blockset-background"
            style={{
              position: 'static',
            }}
          >
            {customBackground}
            {imageBackground}
          </div>
        )}
      </>
    );
  };
