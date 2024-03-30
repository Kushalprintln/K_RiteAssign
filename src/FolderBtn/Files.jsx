import React from "react";
import styles from './Files.module.css';
import { FaRegFile } from "react-icons/fa";
export default function File({fileName}){
    return (
        <div className={styles.file}>
            <FaRegFile />
            {fileName}
        </div>
    )
}