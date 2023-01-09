import React from 'react';

type Props = {};

const CustomBackgroundComponent = (props: Props) => (
  <div
    style={{
      position: 'absolute',
      background: 'rgba(0, 0, 0, 0.5)',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      color: 'white',
      zIndex: 1,
    }}
  >
    I'm the background component
  </div>
);

export default CustomBackgroundComponent;
