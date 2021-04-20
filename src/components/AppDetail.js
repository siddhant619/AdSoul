import React from 'react'
import styles from "../styles/AppDetail.module.css";
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";
import { render } from '@testing-library/react';

const AppDetail = ({match}) => {
    const appInfo=useSelector(state => {
        //console.log('in usesele',state.appList);
        if(state.appList)
            return(state.appList.find(app=>app.id==match.params.id))

    });
    const appStat=useSelector(state => state.appStat[match.params.id]);
    //console.log(appInfo);
    const findRenderRate=(impressions,adResponse)=>{
        if(!adResponse || isNaN(impressions) || isNaN(adResponse)){
            return "-";
        }
        return (((impressions*100)/adResponse).toFixed(0) +"%" );
    }
    
    const parseDate=(date)=>{
        const arr=date.split("-");
        const monthMap={
            "01":"January","02":"February","03":"March ","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September","10":"October","11":"November","12":"December",
        };
        return `${arr[0]} ${monthMap[[arr[1]]]}, ${arr[2]}`;
    }
    const renderrows=()=>{
        if(appStat){
            const renderedList= appStat.map(stat=>{
                return(
                <tr key={stat.date}>
                    <td className={styles.td}>{parseDate(stat.date)}</td>
                    <td className={styles.td}>{stat.revenue}</td>
                    <td className={styles.td}>{stat.adRequest}</td>
                    <td className={styles.td}>{stat.adResponse}</td>
                    <td className={styles.td}>{stat.impressions}</td>
                    <td className={styles.td}>{stat.clicks}</td>
                    <td className={styles.td}>{findRenderRate(stat.impressions,stat.adResponse)}</td>
                </tr>)
            })
            return renderedList;
        }

        return null;
    }
    return (
        <div className={styles.root}>
            <div className={styles.navbar}>
                ADSOUL
            </div>
            <div className={styles.container}>
                <div className={styles.cardHeader}>
                    <div className={styles.logoTitle}>
                    <Link to={`/`}> <i className={`fas  fa-arrow-left ${styles.icon}`} ></i></Link>
                    {appInfo?<div>
                            
                                <h2>{appInfo.appName}</h2>
                                <div className={styles.publisher}>{appInfo.publisherName}</div>
                                
                            </div>
                            :null
                        }
                    </div>
                    
                </div>
                <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <th className={styles.th}>Date</th>
                        <th className={styles.th}>Revenue</th>
                        <th className={styles.th}>Ad Requests</th>
                        <th className={styles.th}>Ad Responses</th>
                        <th className={styles.th}>Impressions</th>
                        <th className={styles.th}>Clicks</th>
                        <th className={styles.th}>Render Rate</th>
                    </tr>
                    {renderrows()}
                    </tbody>
                </table>
                </div>

            </div>

        </div>
    )
}

export default AppDetail
