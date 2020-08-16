import React, { useEffect } from 'react'
import styles from './Home.module.scss';

import { useDispatch } from 'react-redux';
import { load_stop } from '../../../../lib/redux/actions/loadAction';


export default function Home() {
    const dispatch = useDispatch();
    
    
    useEffect(() => {dispatch(load_stop())}, []);

    const content = <div>Home</div>

    return content
}
