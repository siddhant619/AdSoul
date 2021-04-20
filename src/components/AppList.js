import React from 'react'
import styles from "../styles/AppList.module.css";
import AppCard from './AppCard';
import {useSelector} from 'react-redux'
const AppList = () => {
    const appList=useSelector(state => state.appList);
    
    //console.log('in applist',appList);
    const renderList=()=>{
        if(appList){
            const renderedList=appList.map(app=>{
                return(<AppCard name={app.appName} id={app.id} key={app.id} publisher={app.publisherName} />)
            })
            return renderedList
        }
        return null
    }
    return (
        <>
            <div className={styles.nav}>
                <div className={`${styles.container} ${styles.containerFlex}`}>
                    <h1>Apps</h1>
                    <i className={`fas fa-2x fa-cog ${styles.icon}`} ></i>
                </div>
            </div>
            <div className={`${styles.container} ${styles.scrollable}`}>
                {renderList()}
            </div>
        </>
    )
}



export default AppList
