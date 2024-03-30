import React, { useCallback, useState } from "react";
import black from '../Users/UserBlack.png'
import green from '../Users/UserGreen.png'
import red from '../Users/UserRed.png'
import yellow from '../Users/UserYellow.png'
import blue from '../Users/UserBlue.png'
import purple from '../Users/UserPurple.png'
import pink from '../Users/UserPink.png' 

export default function User({color,size}){
    const styles = {
        width: size === 'm' ? "30px" : '15px'
    }
    if(color === 'black'){
        return (
            <img src={black} style={styles} alt="" />
        )
    }else if(color === 'green'){
        return (
            <img src={green} style={styles} alt="" />
        )
    }
    else if(color === 'red'){
        return (
            <img src={red} style={styles} alt="" />
        )
    }else if(color === 'yellow'){
        return (
            <img src={yellow} style={styles} alt="" />
        )
    }else if(color === 'blue'){
        return (
            <img src={blue} style={styles} alt="" />
        )
    }else if(color === 'purple'){
        return (
            <img src={purple} style={styles} alt="" />
        )
    }else if(color === 'pink'){
        return (
            <img src={pink} style={styles} alt="" />
        )
    }
    else {
        return null;
    }
    
}