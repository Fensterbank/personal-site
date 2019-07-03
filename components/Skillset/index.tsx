import styled from '../../theme';
import { Skill } from '../Skill';
import { config, useSprings } from 'react-spring';
import { useState, useEffect, FunctionComponent, useLayoutEffect, useRef, CSSProperties } from 'react';
import { shuffle, debounce } from 'lodash';

const defaultRadius = 120, defaultIconSize = 50;
const bigRadius = defaultRadius * 1.1, bigIconSize = defaultIconSize * 1.1;

export const Root = styled.div`
  width: 50%;
  position: relative;

  @media (max-width: 500px) { 
    width: 100%;
  }
`;

interface SkillsetProps {
  children: any[];
  direction: string;
  speed: number;
}

interface Size {
  default: number;
  hovered: number;
};

export const Skillset: FunctionComponent<SkillsetProps> = ({ children, direction, speed }) => {
  const containerEl = useRef<HTMLDivElement>(null);
  const [skillArray] = useState(shuffle(children));

  const [radius, setRadius] = useState<Size>({
    default: defaultRadius,
    hovered: bigRadius,
  });
  const [iconSize] = useState<Size>({
    default: defaultIconSize,
    hovered: bigIconSize,
  });
  const [angleOffset, setAngleOffset] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const circleSize = radius.hovered * 2 + iconSize.hovered;

  const calcRadius = () => {
    if (containerEl.current) {
      const dimensions = {
        width: containerEl.current!.clientWidth,
        height: containerEl.current!.clientHeight,
      };
      if (dimensions.width > 0) {
        const calcRadius = (dimensions.width - iconSize.hovered) / 2;
        const r = {
          default: Math.round(calcRadius - calcRadius * 0.1),
          hovered: Math.round(calcRadius),
        };
        setRadius(r);
      }
    }
  }

  const onMouseEnter = () => setMouseOver(true);
  const onMouseLeave = () => setMouseOver(false);
  const onResize = () => calcRadius();

  const fps = 60;
  let now;
  let then = Date.now();
  let interval = 1000/fps;
  let delta;
  let frameID: number;
  const tick = () => {
    now = Date.now();
    delta = now - then;
     
    if (delta > interval) {
      then = now - (delta % interval);
      setAngleOffset(angle => angle + speed / 1000);
    }

    frameID = window.requestAnimationFrame(tick);
  }
  
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShowSkills(true);
      frameID = window.requestAnimationFrame(tick);
    }, 1000);
    const debouncedOnResize = debounce(onResize, 300);
    window.addEventListener('resize', debouncedOnResize);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('resize', debouncedOnResize);
      window.cancelAnimationFrame(frameID);
    };
  }, []);

  const calcPosition = (index: number): any => {
    let cRadius, cIconSize, cAngleOffset;
    if (mouseOver)
      cRadius = radius.hovered, cIconSize = iconSize.hovered, cAngleOffset = 0;
    else
      cRadius = radius.default, cIconSize = iconSize.default, cAngleOffset = angleOffset;

    const angle = index * ((2 * Math.PI) / skillArray.length) + (cAngleOffset * (direction === 'right' ? 1 : -1));
    const x = Math.round(circleSize / 2 + cRadius * Math.cos(angle) - cIconSize / 2);
    const y = Math.round(circleSize / 2 + cRadius * Math.sin(angle) - cIconSize / 2);
    return { left: `${x}px`, top: `${y}px`, width: `${cIconSize}px`, height: `${cIconSize}px`, config: mouseOver ? config.gentle : config.molasses };
  }

  useLayoutEffect(() => calcRadius(), []);

  const [springs, set] = useSprings(skillArray.length, index => calcPosition(index));

  // FIXME: Typing is not working properly
  set((((index: number) => calcPosition(index)) as any));

  return <Root onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={containerEl} style={{ height: `${circleSize}px` }}>
    {showSkills && springs.map((props: CSSProperties, index: number) => {
      const skill = skillArray[index];
      return <Skill key={skill.title} title={skill.title} image={skill.image} style={props} href={skill.href} />;
    })}
  </Root>
};
