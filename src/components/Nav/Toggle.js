import React from 'react';
import styles from "./Toggle.module.scss";

import { nav_toggle } from "../../../lib/redux/actions/navAction";
import { useDispatch, useSelector } from "react-redux";

export default function Toggle() {
    const dispatch = useDispatch();
    const isNav = useSelector(state => state.nav)

    return (
        <div onClick={() => dispatch(nav_toggle())} className={`${styles.toggleBox} ${isNav ? styles.open : ""}`}>
            <div className={styles.toggleFrame}>
                <div className={styles.toggleBurger}></div>
            </div>
        </div>
    )
}
