import React from 'react'

function Alert({ alert }) {
    return (

        alert && <div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong> {alert.type} </strong> {alert.msg}
        </div>

    )
}

export default Alert
