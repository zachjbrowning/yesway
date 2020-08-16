import React from 'react'
import styles from "./Wireframe.module.scss";

import { Route, Switch, useLocation } from 'react-router-dom';
import Loadable from 'react-loadable';
import { useSelector, useDispatch } from "react-redux";
import { useSpring, useTransition, animated, config } from 'react-spring';

import Nav from "../Nav/Nav";
import { load_start, load_stop } from '../../../lib/redux/actions/loadAction';


export default function Wireframe() {
    const dispatch = useDispatch();
    const location = useLocation();
    const isNav = useSelector(state => state.nav)

    
    const mainProps = {
        opacity : isNav ? 0 : 1,
        transform : isNav ? "translateY(4rem)" : "translateY(0rem)",
    }
    const transitions = useTransition(location, location => location.pathname, {
        from : { opacity : 0, transform : "translateY(4rem)"},
        enter : { opacity : 1, transform : "translateY(0rem)"},
        leave : { opacity : 0, transform : "translateY(-4rem)"},
        config : {
            tension : 200,
            friction : 2,
            precision : 1,
        }
    })

    
    const el = useTransition(!isNav, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    
    const AsyncHome = Loadable({
        loader: () => import('../Pages/Home/Home'),
        loading() {
            dispatch(load_start())
            return ""
        }
    })
    const AsyncBe = Loadable({
        loader: () => import('../Pages/Be/Be'),
        loading() {
            dispatch(load_start())
            return ""
        }
    })
    const AsyncBelong = Loadable({
        loader: () => import('../Pages/Belong/Belong'),
        loading() {
            dispatch(load_start())
            return ""
        }
    })
    const AsyncAlign = Loadable({
        loader: () => import('../Pages/Align/Align'),
        loading() {
            dispatch(load_start())
            return ""
        }
    })
    const AsyncGrow = Loadable({
        loader: () => import('../Pages/Grow/Grow'),
        loading() {
            dispatch(load_start())
            return ""
        }
    })

    
    


    return (
        <>
            <main id="main" className={`${styles.main} ${!isNav ? styles.show : ""}`}>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={AsyncHome}/>
                        <Route path="/be" component={AsyncBe}/>
                        <Route path="/belong" component={AsyncBelong}/>
                        <Route path="/grow" component={AsyncGrow}/>
                        <Route path="/align" component={AsyncAlign}/>
                    </Switch>
                </div>
            </main>
            {/*el.map(({ item, key, props }) =>
                item && <animated.main key={key} style={props}>
                    
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={AsyncHome}/>
                            <Route path="/be" component={AsyncBe}/>
                            <Route path="/belong" component={AsyncBelong}/>
                            <Route path="/grow" component={AsyncGrow}/>
                            <Route path="/align" component={AsyncAlign}/>
                        </Switch>
                    </div>
                    
                    
                    
                    
                </animated.main>
            )*/}
                 
            {/*transitions.map(({item, props, key}) => (
                        <animated.div key={key} style={props} className={`container ${styles.fader}`}>
                            <Switch location={item}>
                                <Route exact path="/" component={AsyncHome}/>
                                <Route path="/be" component={AsyncBe}/>
                                <Route path="/belong" component={AsyncBelong}/>
                                <Route path="/grow" component={AsyncGrow}/>
                                <Route path="/align" component={AsyncAlign}/>
                            </Switch>
                        </animated.div>
            ))*/}
            <Nav /> 
        </>
    )
}
