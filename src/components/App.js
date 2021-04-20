import React,{useEffect} from 'react'
import { useDispatch} from 'react-redux'

import AppList from './AppList'
import styles from "../styles/App.module.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import AppDetail from './AppDetail';
import LeftSection from './LeftSection';
import {fetchAppsandStats} from '../actions'

const App = () => {
    const dispatch= useDispatch();
    useEffect(() => {
        //console.log('in app.js useff');
        dispatch(fetchAppsandStats());
        
    } );
    return (
        <Router>
            <Route exact path="/">
                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <LeftSection />
                    </div>
                    <div className={styles.main}>
                        <AppList />                
                    </div>
                </div>
            </Route>
            <Route exact path="/app/:id" component={AppDetail}/>
        </Router>
    )
}

export default App
