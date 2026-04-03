'use client';

import { useState, useEffect, FC, ReactElement } from 'react';
import { useTransition, animated, config, SpringConfig } from '@react-spring/web';

import { Hidden } from '../Hidden';

interface FadingProps {
  delay: number;
  children: ReactElement;
  springConfig?: SpringConfig;
}

export const Fading: FC<FadingProps> = ({
  delay = 500,
  children,
  springConfig = config.wobbly,
}) => {
  const [visible, setVisible] = useState(false);
  const transitions = useTransition(visible, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
    config: springConfig,
  });

  useEffect(() => {
    window.setTimeout(() => setVisible(true), delay);
  }, [delay]);

  return (
    <>
      {!visible && <Hidden>{children}</Hidden>}
      {transitions((props, item) =>
        item && (
          <animated.div style={props}>
            {children}
          </animated.div>
        )
      )}
    </>
  );
};
