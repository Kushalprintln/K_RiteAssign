import React from "react";
import styles from './Button.module.css';
import { FaCaretDown } from "react-icons/fa";
export default function Button({children,text,drop}){
    return (
        <div className={styles.button}>
            {children}{text}
            {drop && <span className={styles.arrow}>
                <FaCaretDown />
                {/* <FaCaretUp /> */}
            </span>}
        </div>
    )
}