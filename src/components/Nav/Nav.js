import React from 'react';
import styles from "./Nav.module.scss";

import Dots from "./Dots";
import Toggle from "./Toggle";
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { nav_close } from "../../../lib/redux/actions/navAction";

export default function Nav() {
    const dispatch = useDispatch();




    return (
        <div 
            
            className={styles.navContainer}>
            <div className={`container`}>
                <div className={styles.navBox}>
                    <Dots />
                    <Toggle />
                    <div className={styles.yesBox}>
                        <Link to={'/'}>
                            <span onClick={() => {reshow(); dispatch(nav_close())}}>YesWay</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
