import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 300,
      duration: 2,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div style={{ height: "200vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div ref={boxRef} style={{ width: 100, height: 100, backgroundColor: "purple" }}></div>
    </div>
  );
};

export default ScrollAnimation;
