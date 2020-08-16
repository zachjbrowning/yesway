import React from 'react';
import styles from "./Dots.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { nav_close } from "../../../lib/redux/actions/navAction";
import { Link } from 'react-router-dom';

import Home from "../Icons/Home";
import Be from "../Icons/Be";
import Belong from "../Icons/Belong";
import Grow from "../Icons/Grow";
import Align from "../Icons/Align";

export default function Dot(props) {
    const isNav = useSelector(state => state.nav);
    const isLoad = useSelector(state => state.load)
    const dispatch = useDispatch();
    
    const icons = {
        Home : <Home />,
        Be : <Be />,
        Belong : <Belong />,
        Grow : <Grow />,
        Align : <Align />
    }
    const textProps = {
        opacity : isNav ? 1 : 0,
        transform : isNav ? "scale(1)" : "scale(0)",
        color : `var(--${props.id})`
    }
    const dotProps = {
        animationDelay : `${props.num * 100}ms`,
        animationName : isLoad ? styles.pulse : "",
        animationIterationCount : isLoad ? "infinite" : 1,
        backgroundColor : `var(--${props.id})`,
        left : isNav ? "calc(20%)" : `calc(${1.5 * props.num + 1}rem)`,
        width : isNav ? "min(10vh, 10vw)" : "0.75rem",
        height : isNav ? "min(10vh, 10vw)" : "0.75rem",
        top : isNav ? `calc( (${props.num + 1} * (100vh - 4rem - min(50vh, 50vw)) / 6) + (${props.num} * min(10vh, 10vw) ))` : '-2.25rem',
        transition : `all ${700 + (props.num ** 2) * 6}ms ease-in-out, transform 300ms ease, background-color 0s`,
    }
    const hoverProps = {
        width : isNav ? "70vw" : "0vh",
    }

    
    return ( <>
            <Link to={`/${props.id === "Home" ? "" : props.id.toLowerCase()}`}>
                <div style={dotProps} className={styles.dot}>
                    {
                        isNav ? <div className={styles.iconBox}>
                            {icons[props.id]}
                        </div>  : ""
                    }
                        <div onClick={() => dispatch(nav_close())} style={hoverProps} className={styles.dotTextBox}>
                            <div style={textProps} className={styles.dotText}>{props.id}</div>
                        </div>
                </div>
            </Link>

        </>
    )
}
