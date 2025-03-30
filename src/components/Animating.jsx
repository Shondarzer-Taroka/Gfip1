import { useEffect, useRef } from "react";
import gsap from "gsap";

const BoxAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { x: 200, duration: 2, ease: "power2.out" });
  }, []);

  return <div ref={boxRef} style={styles.box}></div>;
};

const styles = {
  box: {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
  },
};

export default BoxAnimation;
