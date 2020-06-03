import React from 'react';
import './index.scss';

const CircularProgress = ({ size = 40, thickness = 3.6, color, fixed }) => {
  const spinnerStyles = {
    top: `calc(50% - ${size / 2}px)`,
    left: `calc(50% - ${size / 2}px)`,
    width: size,
    height: size,
    color: color || '#2b72cb',
  };
  return (
    <div className="circular-progress__fade" style={{ position: `${fixed ? 'fixed' : 'absolute'}` }}>
      <div id="ssSpnr_TA" className="circular-progress__spinner" style={spinnerStyles}>
        <svg className="circular-progress__svg" viewBox={`${size / 2} ${size / 2} ${size} ${size}`}>
          <circle
            className="circular-progress__circle circular-progress__circleIndeterminate"
            cx={size}
            cy={size}
            r={(size - thickness) / 2}
            fill="none"
            strokeWidth={thickness}
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default CircularProgress;
