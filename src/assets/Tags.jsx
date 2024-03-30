import React, { useEffect, useState } from "react";
export default function Tags({tag,color}) {
    const [shades,setshades] = useState([]);
    useEffect(()=>{
        if(color ==='purple'){
            setshades(['#9070d8','#dacdf4'])
        }else if(color ==='orange'){
            setshades(['#ccaa8e','#fee9d8'])
        }else if(color ==='green'){
            setshades(['#619d81','#e1f8e7'])
        }else if(color ==='yellow'){
            setshades(['#bfac73','#fff8d4'])
        }else if(color ==='blue'){
            setshades(['#619aaa','#daf5fd'])
        }
        else{
            setshades(['#b8b9bb','#f3f4f5'])
        }

    },[]);
    const tagCss = {
        fontSize:'12px',
        padding:'2px',
        borderRadius:'2px',
        width:'fit-content',
        border: `1px solid ${shades[0]}`,
        color:`${shades[0]}`,
        backgroundColor: `${shades[1]}`,
        textTransform: 'capitalize'
    };
    return (
        <div style={tagCss}>
            {tag}
        </div>
    )
}