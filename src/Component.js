import React, { useState, useEffect } from 'react'

const Component = () => {

    const [name, setname] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setname("John Doe")
        }, 3000);
    })

    // All the JSX will go inside this return
    return(
        <h1>Name from API: {name}</h1>
    )
}

export default Component