import React, { useRef } from 'react'

const Home = () => {

    const inputEl = useRef();

    const handleClick = () => {
        inputEl.current.value= "Hello"
        inputEl.current.style.background ="purple"
        inputEl.current.focus()
        console.log(inputEl.current.value)
    }
    const submitHandler=e=>{
        e.preventDefault()
        console.log(inputEl.current.value)
    }

    // All the JSX will go inside this return
    return(
        <div>
            <form onSubmit={submitHandler}>
            <input ref={inputEl} type='text'/>
            <button onClick={handleClick}>Click</button>
            <input type='submit'></input>
            </form>
        </div>
    )
}

export default Home