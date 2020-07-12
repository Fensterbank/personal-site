import { shuffle, debounce } from 'lodash';
import {
  useState,
  useEffect,
  FunctionComponent,
  useLayoutEffect,
  useRef,
  CSSProperties,
} from 'react';
import { config, useSprings } from 'react-spring';

import { Skill } from '../Skill';

const defaultRadius = 100;
const defaultIconSize = 30;
const bigRadius = defaultRadius * 1.1;
const bigIconSize = defaultIconSize * 1.1;

interface SkillsetProps {
  children: any[];
  direction: string;
  speed: number;
}

interface Size {
  default: number;
  hovered: number;
}

interface Dimensions {
  width: number;
  height: number;
}

export const Skillset: FunctionComponent<SkillsetProps> = ({
  children,
  direction,
  speed,
}) => {
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
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  const [angleOffset, setAngleOffset] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const circleSize = radius.hovered * 2 + iconSize.hovered;

  const calcRadius = () => {
    if (containerEl.current) {
      const dimensions = {
        width: containerEl.current.clientWidth,
        height: containerEl.current.clientHeight,
      };
      if (dimensions.width > 0) {
        const calcRadius = (dimensions.width - iconSize.hovered) / 2;
        const r = {
          default: Math.round(calcRadius - calcRadius * 0.1),
          hovered: Math.round(calcRadius),
        };
        setRadius(r);
        setDimensions(dimensions);
      }
    }
  };

  const onMouseEnter = () => setMouseOver(true);
  const onMouseLeave = () => setMouseOver(false);
  const onResize = () => calcRadius();

  const fps = 60;
  let now;
  let then = Date.now();
  const interval = 1000 / fps;
  let delta;
  let frameID: number;
  const tick = () => {
    now = Date.now();
    delta = now - then;

    if (delta > interval) {
      then = now - (delta % interval);
      setAngleOffset((angle) => angle + speed / 2000);
    }

    frameID = window.requestAnimationFrame(tick);
  };

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

  const calcCircle = (index: number): any => {
    const angle =
      index * ((2 * Math.PI) / skillArray.length) +
      angleOffset * (direction === 'right' ? 1 : -1);
    const x = Math.round(
      circleSize / 2 + radius.default * Math.cos(angle) - iconSize.default / 2,
    );
    const y = Math.round(
      circleSize / 2 + radius.default * Math.sin(angle) - iconSize.default / 2,
    );
    return {
      left: `${x}px`,
      top: `${y}px`,
      width: `${iconSize.default}px`,
      height: `${iconSize.default}px`,
      config: config.molasses,
    };
  };

  const calcRectangle = (index: number): any => {
    const itemsPerRow = skillArray.length === 12 ? 4 : 3;
    const row = Math.floor(index / itemsPerRow);

    const rectWidth =
      iconSize.hovered / 2 + itemsPerRow * (iconSize.hovered * 1.5);

    const x =
      (dimensions.width - rectWidth) / 2 +
      iconSize.hovered / 2 +
      (index - row * itemsPerRow) * iconSize.hovered * 1.5;
    const y = iconSize.hovered / 2 + row * (iconSize.hovered * 1.5);

    return {
      left: `${x}px`,
      top: `${y}px`,
      width: `${iconSize.hovered}px`,
      height: `${iconSize.hovered}px`,
      config: config.gentle,
    };
  };

  const calcPositions = (index: number): any => {
    if (mouseOver) return calcRectangle(index);
    return calcCircle(index);
  };

  useLayoutEffect(() => calcRadius(), []);

  const [springs, set] = useSprings(skillArray.length, (index) =>
    calcPositions(index),
  );

  set(((index: number) => calcPositions(index)) as any);

  return (
    <div
      className="relative flex-grow"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={containerEl}
      style={{ height: `${circleSize}px` }}
    >
      {showSkills &&
        springs.map((props: CSSProperties, index: number) => {
          const skill = skillArray[index];
          return (
            <Skill
              key={skill.title}
              title={skill.title}
              image={skill.image}
              style={props}
              href={skill.href}
            />
          );
        })}
    </div>
  );
};
