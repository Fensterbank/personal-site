import { useTransition, animated, config, SpringConfig } from 'react-spring';
import { useState, useEffect, FunctionComponent, ReactElement, Fragment } from 'react';
import { Hidden } from '../Hidden';

interface iProps {
  delay: number;
  children: ReactElement;
  springConfig?: SpringConfig;
}
export const Fading: FunctionComponent<iProps> = ({ delay = 500, children, springConfig = config.wobbly }) => {
  const [visible, setVisible] = useState(false)
  const transitions = useTransition(visible, null, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
    config: springConfig,
  });

  useEffect(() => {
    window.setTimeout(() => setVisible(true), delay);
  }, []);

  return <Fragment>
    {!visible && <Hidden>{children}</Hidden>}
    {transitions.map(({ item, key, props }) =>
      item && <animated.div key={key} style={props}>{children}</animated.div>
    )}
  </Fragment>
};
