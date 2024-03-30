import React from "react";
import styles from './TeamBtn.module.css';
export default function TeamBtn({children,team,changeHeading}){
    function setheading(){
        changeHeading(team);
    }
    return (
        <div className={styles.teambtn} onClick={setheading}>
            {children}{team}
        </div>
    )

}