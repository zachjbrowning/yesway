import React, { Suspense, lazy } from 'react'
import styles from "./Wireframe.module.scss";

import { Route, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useSpring, useTransition, animated, config } from 'react-spring';

import Nav from "../Nav/Nav";
import { load_start, load_stop } from '../../../lib/redux/actions/loadAction';


export default function Wireframe() {
    const dispatch = useDispatch();
    //const isNav = useSelector(state => state.nav)
    
    const Home = lazy(() => {dispatch(load_start()); return import('../Pages/Home/Home')});
    const Be = lazy(() => {dispatch(load_start()); return import('../Pages/Be/Be')});
    const Belong = lazy(() => {dispatch(load_start()); return import('../Pages/Belong/Belong')});
    const Align = lazy(() => {dispatch(load_start()); return import('../Pages/Align/Align')});
    const Grow = lazy(() => {dispatch(load_start()); return import('../Pages/Grow/Grow')});
    
    
    function boom() {
        document.getElementById("main").style.animationName = "none";
        setTimeout(() => document.getElementById("main").style.animationName = styles.peek, 10)
        
    }


    return <>
        <main onClick={boom} id="main" className={`${styles.main}`}>
            <div className="container">
                <Suspense fallback={<></>}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/be" component={Be}/>
                        <Route path="/belong" component={Belong}/>
                        <Route path="/grow" component={Grow}/>
                        <Route path="/align" component={Align}/>
                    </Switch>
                </Suspense>
                
            </div>
        </main>
        <Nav /> 
    </>
    
}
