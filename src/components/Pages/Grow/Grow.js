import React, { useEffect } from 'react';
import styles from './Grow.module.scss';

import { useDispatch } from 'react-redux';
import { load_stop } from '../../../../lib/redux/actions/loadAction';

export default function Grow() {
    const dispatch = useDispatch();
    
    
    useEffect(() => {dispatch(load_stop())}, []);

    return (
        <div>
            Grow
        </div>
    )
}
