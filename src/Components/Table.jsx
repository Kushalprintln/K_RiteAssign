import React, { useState } from "react";
import styles from './Table.module.css';
import TableRow from "./TableRow";

// importing checked/Uncheked
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

export default function Table({ data }) {
    const [selectAll,setSelectAll] = useState(false);
    return (
        <table className={styles.infotable}>
            <thead>
                <tr>
                    <th>
                        <div className={styles.brand} style={{cursor:'pointer'}} onClick={()=>{setSelectAll(prev=>!prev)}}>
                            <span style={{display:'flex'}} >
                            {selectAll ? <ImCheckboxChecked /> :<ImCheckboxUnchecked />}
                            </span>
                            <span>Brand</span>
                        </div>
                    </th>
                    <th>Description</th>
                    <th>Members</th>
                    <th>Categories</th>
                    <th>Tags</th>
                    <th>Next Meeting</th>
                </tr>
            </thead>
            <tbody>
                <TableRow data={data} selectAll={selectAll}/>
            </tbody>
        </table>
    )
}