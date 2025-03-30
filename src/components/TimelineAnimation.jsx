import { useEffect, useRef } from "react";
import gsap from "gsap";

const TimelineAnimation = () => {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(box1Ref.current, { x: 100, duration: 1 })
      .to(box2Ref.current, { x: 100, duration: 1 }, "-=0.5"); // Overlapping animations
  }, []);

  return (
    <div>
      <div ref={box1Ref} style={{ width: 100, height: 100, background: "red", marginBottom: 10 }}></div>
      <div ref={box2Ref} style={{ width: 100, height: 100, background: "green" }}></div>
    </div>
  );
};

export default TimelineAnimation;
