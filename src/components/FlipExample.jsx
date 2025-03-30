import { useState, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const FlipExample = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const containerRef = useRef(null);

  const toggleLayout = () => {
    const state = Flip.getState(containerRef.current);
    setIsFlipped(!isFlipped);
    Flip.from(state, { duration: 1, ease: "power2.inOut" });
  };

  return (
    <div>
      <div ref={containerRef} style={{ display: "flex", flexDirection: isFlipped ? "column" : "row" }}>
        <div style={{ width: 100, height: 100, backgroundColor: "red", margin: 5 }}></div>
        <div style={{ width: 100, height: 100, backgroundColor: "blue", margin: 5 }}></div>
      </div>
      <button onClick={toggleLayout}>Flip Layout</button>
    </div>
  );
};

export default FlipExample;
