import React,{useState,useEffect} from 'react'
import styles from "../styles/AppCard.module.css";
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom";
const AppCard = ({id,name,publisher}) => {
    const appStat=useSelector(state => state.appStat[id]);
    //console.log('in appcard', appStat);
    const [revenue, setRevenue] = useState(0);
    const [adRequest, setAdRequest] = useState(0);
    const [adResponse, setAdResponse] = useState(0);
    const [impressions, setImpressions] = useState(0);
    useEffect(() => {
        const calculateStats=()=>{
            let r=0,adreq=0,adres=0,imp=0;
            appStat.map(app=>{
                r+=app.revenue;
                adreq+=app.adRequest;
                adres+=app.adResponse;
                imp+=app.impressions;
            })
            setRevenue(r);
            setAdRequest(adreq);
            setAdResponse(adres);
            setImpressions(imp);
        }
        if(appStat)
            calculateStats();
    }, [appStat])
    function fnum(x) {
        if(isNaN(x)) return x;
    
        if(x < 9999) {
            return x;
        }
    
        if(x < 1000000) {
            return Math.round(x/1000) + "K";
        }
        if( x < 10000000) {
            return (x/1000000).toFixed(2) + "M";
        }
    
        if(x < 1000000000) {
            return Math.round((x/1000000)) + "M";
        }
    
        if(x < 1000000000000) {
            return Math.round((x/1000000000)) + "B";
        }
    
        return "1T+";
    }
    return (
        <div className={styles.card}> 
            <div className={styles.cardHeader}>
                <div className={styles.logoTitle}>
                    <div className={styles.logo}></div>
                    <div>
                        <h2>{name}</h2>
                        <div className={styles.publisher}>{publisher}</div>
                    </div>
                </div>
                <Link to={`/app/${id}`}> <i className={`fas  fa-arrow-right ${styles.icon}`} ></i></Link>
            </div>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Revenue</div>
                    <div className={styles.statNumber}>${fnum(revenue)}</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Ad requests</div>
                    <div className={styles.statNumber}>{fnum(adRequest)}</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Ad response</div>
                    <div className={styles.statNumber}>{fnum(adResponse)}</div>
                </div>
                <div className={styles.stat}>
                    <div className={styles.statTitle}>Impressions</div>
                    <div className={styles.statNumber}>{fnum(impressions)}</div>
                </div>
            </div>
            {/* {id}
            {publisher}&nbsp;
            {revenue}&nbsp;
            {adRequest}&nbsp;
            {adResponse}&nbsp;
            {impressions} */}

        </div>
    )
}

export default AppCard
