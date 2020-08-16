import React, { useEffect } from 'react';
import styles from './Align.module.scss';

import { useDispatch } from 'react-redux';
import { load_stop } from '../../../../lib/redux/actions/loadAction';

export default function Align() {
    const dispatch = useDispatch();
    
    
    useEffect(() => {dispatch(load_stop())}, []);

    return (
        <div>
            Align
        </div>
    )
}
