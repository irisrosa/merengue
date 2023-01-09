import React from 'react';

type Props = {};

const CustomBackgroundComponent = (props: Props) => (
  <div
    style={{
      position: 'absolute',
      background: '#CCC',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      color: 'white',
    }}
  >
    I'm the background component
  </div>
);

export default CustomBackgroundComponent;
