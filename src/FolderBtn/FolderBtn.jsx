import React, { useState } from "react";
import styles from './FolderBtn.module.css'
import { FaRegFolder } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import File from "./Files";
export default function FolderBtn({foldername}){
    const [showDropDown,SetShowDropDown] = useState(false);
    function toggleDropDown(){
        SetShowDropDown(prev=>!prev);
    }
    const bgClr = {
        backgroundColor: showDropDown && '#f4f5f6'
    }
    return (
        <div className={styles.folderContainer}>
            <div className={styles.folder} onClick={toggleDropDown} style={bgClr}>
                <FaRegFolder />
                {foldername}
                <span className={styles.arrow}>
                    {showDropDown ? <FaCaretUp />: <FaCaretDown /> }
                </span>
            </div>
            {showDropDown && <div className={styles.folderDropDown}>
                <File fileName={'Roadmap'}/>
                <File fileName={'FeedBack'}/>
                <File fileName={'Performance'}/>
                <File fileName={'Team'}/>
                <File fileName={'Analystic'}/>
            </div>}
        </div>
    )
}