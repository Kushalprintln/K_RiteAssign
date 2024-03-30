import React from "react";
export default function IconBtn({ children }) {
    const btnstyles = {
        border: '1px solid #edeeee',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25px',
        height: '25px',
        cursor: 'pointer'
    }
    return (
        <div style={btnstyles}>
            {children}
        </div>
    )
}