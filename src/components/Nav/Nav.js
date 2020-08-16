import React from 'react';
import styles from "./Nav.module.scss";

import Dots from "./Dots";
import Toggle from "./Toggle";

import { useSelector, useDispatch } from 'react-redux';
import { nav_close } from "../../../lib/redux/actions/navAction";
import { load_start, load_stop } from "../../../lib/redux/actions/loadAction";

export default function Nav() {
    const isNav = useSelector(state => state.nav);
    const load = useSelector(state => state.load)
    const dispatch = useDispatch();

    return (
        <div 
            
            className={styles.navContainer}>
            <div className={`container`}>
                <div className={styles.navBox}>
                    <Dots />
                    <Toggle />
                    <div className={styles.yesBox}>
                        <span onClick={() => dispatch(load ? load_stop() : load_start())}>YesWay</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
