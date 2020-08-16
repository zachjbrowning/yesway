import React from 'react';
import styles from "./Dots.module.scss";

import Dot from "./Dot";
import { useSelector, useDispatch } from "react-redux";
import { nav_toggle } from "../../../lib/redux/actions/navAction";

export default function Dots() {
    const isNav = useSelector(state => state.nav);
    const isLoad = useSelector(state => state.load)

    return (
        <div className={`${styles.dotBox} ${isNav ? styles.nav : (isLoad ? styles.hideLoad : styles.hide)}`}>
            <Dot id="Home" num={0} />
            <Dot id="Be" num={1} />
            <Dot id="Belong" num={2} />
            <Dot id="Grow" num={3} />
            <Dot id="Align" num={4} />
        </div>
    )
}
