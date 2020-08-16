import React, { useEffect } from 'react'
import styles from './Be.module.scss';

import { useDispatch } from 'react-redux';
import { load_stop } from '../../../../lib/redux/actions/loadAction';

export default function Be() {
    const dispatch = useDispatch();
    
    
    useEffect(() => {dispatch(load_stop())}, []);

    return (
        <div>
            Be
        </div>
    )
}
