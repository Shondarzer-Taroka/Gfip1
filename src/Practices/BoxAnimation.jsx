import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const BoxAnimation1 = () => {
const box1Ref=useRef()

useEffect(()=>{
    gsap.to(box1Ref.current,{y:'2000',duration:'2000',ease:'circ.out'})
},[])
    return (
        <div>
            <div ref={box1Ref} style={{background:'red', height:'200px',width:'200px'}}></div>
        </div>
    );
};



export default BoxAnimation1;