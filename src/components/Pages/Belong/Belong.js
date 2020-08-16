import React, { useEffect } from 'react';
import styles from './Belong.module.scss'

import shower from '../Pages.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { load_stop } from '../../../../lib/redux/actions/loadAction';

export default function Belong() {
    const dispatch = useDispatch();
    const isNav = useSelector(state => state.nav);
    
    useEffect(() => {dispatch(load_stop())}, []);

    if (isNav) document.getElementById("main").classList.remove(shower.show);
    else document.getElementById("main").classList.add(shower.show);

    return (
        <div>
            Belong
        </div>
    )
}
