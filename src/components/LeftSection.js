import React from 'react'
import styles from "../styles/LeftSection.module.css";

const LeftSection = () => {
    return (
        <div className={styles.root}>
            <div className={styles.highlighted}>
                <h3 className={styles.title}>ADSOUL</h3>
                <div className={styles.imageContainer}>
                    <img alt="main icon" src="images/asset1.svg"></img>
                </div>
            </div>

            <div className={styles.features}>
                <h2 className={styles.featuresTitle}>Revenue Optimization</h2>
                <div className={styles.options}>
                    <div className={styles.flexCol}>
                        <div className={styles.item}>
                            <img alt="fill rate" src="images/icon1.svg"></img>
                            <p className={styles.itemName}>Fill Rate</p>
                        </div>
                        <div className={styles.item}>
                            <img alt="refersh rate" src="images/icon3.svg"></img>
                            <p className={styles.itemName}>Refresh Rate</p>
                        </div>
                        
                    </div>
                    <div className={styles.flexCol}>
                        <div className={styles.item}>
                            <img alt="improve ctr" src="images/icon2.svg"></img>
                            <p className={styles.itemName}>Improve CTR</p>
                        </div>
                        <div className={styles.item}>
                            <img alt="integration" src="images/icon4.svg"></img>
                            <p className={styles.itemName}>Quick Integration</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftSection
