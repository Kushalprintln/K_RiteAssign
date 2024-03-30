import React, { useState } from "react";
import styles from './TableRow.module.css';

// importing checked/Uncheked
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import User from "../assets/User";
import Tags from "../assets/Tags";

export default function TableRow({ data ,selectAll}) {

    return (
        data.map((ele, idx) => {
            const [seleted,setSelected] = useState(false);
            return (
                <tr className={styles.row} key={idx}>
                    <td >
                        <div className={styles.brand} style={{cursor: 'pointer' }} onClick={() => { setSelected(prev => !prev) }} >
                            <span style={{ display: 'flex'}} >
                                {selectAll ? <ImCheckboxChecked /> :seleted ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                            </span>
                            <img src={ele.brand.img} alt="" />
                            <span>{ele.brand.name}</span>
                        </div>
                    </td>
                    <td>{ele.description}</td>
                    <td>
                        <div className={styles.members}>
                            {ele.members.map((mem, idx) => {
                                return <User color={mem} key={idx} />
                            })}
                        </div>
                    </td>
                    <td>
                        <div className={styles.categeries}>
                            {ele.categories.map((ele, idx) => {
                                return <Tags tag={ele.tag} color={ele.color} key={idx} />
                            })}

                        </div>
                    </td>
                    <td>
                        <Tags tag={'#digitalTransformation'} />
                    </td>
                    <td>
                        <Tags tag={ele.next.meet} color={ele.next.color} />
                    </td>
                </tr>
            )
        })


    )
}