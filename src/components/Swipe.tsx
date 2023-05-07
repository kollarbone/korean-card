
import './index.css';
import { Frame, useMotionValue, useTransform, useAnimation } from 'framer';
  
export const Card = () => {
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0, 1, 1, 1, 0]
  );
  const animControls = useAnimation();
  
  return (
    <div className='App'>
      <Frame
        center
        drag='x'
        x={motionValue}
        rotate={rotateValue}
        opacity={opacityValue}
        dragConstraints={{ left: -1000, right: 1000 }}
        onDragEnd={(event:any, info:any) => {
          if (Math.abs(info.point.x) <= 150) {
            animControls.start({ x: 0 });
          } else {
            animControls.start({ x: info.point.x < 0 ? -200 : 200 });
          }
        }}
      />
    </div>
  );
};