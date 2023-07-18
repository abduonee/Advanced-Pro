import React from 'react'

export const PageNotFound = () => {
    const NontFound = {

        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '100px',
        display: 'flex',

        padding: '20px',
        height: '100%',
    }
    return (
        <div className='h-[100vh]'>

            <h1 style={NontFound}><span> <h5> 404 error...</h5></span></h1>

        </div>
    )
}
