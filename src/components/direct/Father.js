import React from 'react'

import Son from './Son'

export default props => {
    let x = 13;
    let y = 100;

    return (
        <>
            <Son a={x} b={y}/>
        </>
    )
}