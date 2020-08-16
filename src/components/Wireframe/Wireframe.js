import React from 'react'
import styles from "./Wireframe.module.scss";

import { useSelector } from "react-redux";
import { useSpring, animated, config } from 'react-spring';

import Nav from "../Nav/Nav";


export default function Wireframe() {
    const isNav = useSelector(state => state.nav)
    
    const containConfig = {
        tension : 2000,
        friction : 2,
        precision : 1,
        delay : 0,
    }
    const containProps = useSpring({
        opacity : isNav ? 0 : 1,
        transform : isNav ? "translateY(4rem)" : "translateY(0rem)",
        config : containConfig
    })

    return (
        <>
            <main>
                <animated.div config={config.default} style={containProps} className={`container ${styles.fader}`}>
                
                
                </animated.div>
            </main>
            <Nav /> 
        </>
    )
}
