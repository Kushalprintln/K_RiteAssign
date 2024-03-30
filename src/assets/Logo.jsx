import React from "react";
import styles from './Logo.module.css';
import logoimg from '../Images/square-logo-black-and-white.png'
import User from "./User";
export default function Logo(){
    return (
        <div className={styles.logo}>
            <img src={logoimg} alt="" className={styles.logoimg}/>
            <div className={styles.info}>
                <div style={{color:'#a4a5a9'}}>INC</div>
                <div style={{fontWeight:'500'}}>InnovateHub</div>
            </div>
            <User color={'red'} size={'m'}/>
        </div>
    )
}