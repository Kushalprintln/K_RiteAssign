import React from "react";
import styles from './Menu.module.css'
import Logo from "../assets/Logo";
import TeamBtn from "../TeamButton/TeamBtn";
import { FaPenNib } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoMdCode } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import FolderBtn from "../FolderBtn/FolderBtn";
export default function Menu({changeHeading}) {
    return (
        <aside className={styles.menu}>
            <Logo />
            <div className={styles.teamSection}>
                <TeamBtn team={'Design Team'} changeHeading={changeHeading}>
                    <FaPenNib size={'1.2em'} />
                </TeamBtn>
                <TeamBtn team={'Marketing Team'} changeHeading={changeHeading}>
                    <HiOutlineSpeakerphone size={'1.2em'} />
                </TeamBtn>
                <TeamBtn team={'Development Team'} changeHeading={changeHeading}>
                    <IoMdCode size={'1.2em'} />
                </TeamBtn>
            </div>
            <h4 className={styles.folderHeading}><span>FOLDERS</span><span style={{cursor:'pointer'}}>+</span></h4>
            <div className={styles.folder}>
                <FolderBtn foldername={'Products'} />
                <FolderBtn foldername={'Sales'} />
                <FolderBtn foldername={'Design'} />
                <FolderBtn foldername={'Office'} />
                <FolderBtn foldername={'Legal'} />
            </div>
            <div className={styles.helpSection}>
                <TeamBtn team={'Invite Teammates'}>
                    <MdOutlinePersonAddAlt size={'1.2em'} />
                </TeamBtn>
                <TeamBtn team={'Help and First Step'}>
                    <IoMdHelpCircleOutline size={'1.2em'} />
                </TeamBtn>
            </div>
        </aside>
    )
}