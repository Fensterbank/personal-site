import styled from '../../theme';
import { Skill } from '../Skill';
import { animated, config, useSprings } from 'react-spring';
import { useState, useEffect, FunctionComponent, Fragment, ReactElement, useLayoutEffect, useRef } from 'react';
import { shuffle } from 'lodash';

const iconSize = 50;

export const Root = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const Tile = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

interface Dimensions {
  width: number;
  height: number;
}

interface SkillsetProps {
  children: any[];
  direction: string;
}

const defaultRadius = 120, defaultIconSize = 50;

export const Skillset: FunctionComponent<SkillsetProps> = ({ children, direction }) => {
  const containerEl = useRef(null);
  const [skillArray] = useState(shuffle(children));
  const [radius, setRadius] = useState(defaultRadius);
  const [iconSize, setIconSize] = useState(defaultIconSize);
  const [angleOffset, setAngleOffset] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  const [showSkills, setShowSkills] = useState(false);

  const onMouseEnter = () => {
    setMouseOver(true);
    setRadius(130);
    setIconSize(60);
  }

  const onMouseLeave = () => {
    setMouseOver(false);
    setRadius(defaultRadius);
    setIconSize(defaultIconSize);
  }

  useEffect(() => {
    const interval = window.setInterval(() => setAngleOffset(angle => angle + 0.002), 10);
    const timeout = window.setTimeout(() => setShowSkills(true), 1000);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, []);

  const calcPosition = (index: number) => {
    if (dimensions == null)
      return { left: `0px`, top: `0px`, width: `${iconSize}px`, height: `${iconSize}px` };

    const angle = index * ((2 * Math.PI) / skillArray.length) + ((mouseOver ? 0 : angleOffset) * (direction === 'right' ? 1 : -1));
    const x = Math.round(dimensions.width / 2 + radius * Math.cos(angle) - iconSize / 2);
    const y = Math.round(dimensions.height / 2 + radius * Math.sin(angle) - iconSize / 2);
    return { left: `${x}px`, top: `${y}px`, width: `${iconSize}px`, height: `${iconSize}px`, config: mouseOver ? config.gentle : config.molasses };
  }

  useLayoutEffect(() => {
    if (containerEl.current)
      setDimensions({
        width: containerEl.current!.clientWidth,
        height: containerEl.current!.clientHeight,
      });
  }, []);

  const [springs, set, stop] = useSprings(skillArray.length, index => calcPosition(index));

  // Update springs with new props
  set(index => calcPosition(index));

  return <Root onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={containerEl}>
    {showSkills && springs.map((props, index) => {
      const skill = skillArray[index];
      return <Tile key={skill.title} style={props}><Skill key={skill.title} title={skill.title} image={skill.image} /></Tile>;
    })}
  </Root>

};
