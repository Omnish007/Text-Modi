import React from 'react'

function Alert({ alert }) {
    return (
        <div style={{height:"60px"}}>
            {alert && <div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong> {alert.type} </strong> {alert.msg}
            </div>}
        </div>
    )
}

export default Alert
