import React, { useState } from "react"
import Function from './Function'
import Class from './Class'
import './index.css'



const Outcome=()=> {
  const [name,SetName]=useState(false)
  const [name2,SetName2]=useState(false)
  return (
    <div className='color'>
    <center>
    <h1 id="id">Styling using Functional and Class Component</h1>
    </center>
 <button className="btn"onClick={()=>name?SetName(false):SetName(true)}>To see styling in Functional Component</button>
 <button className="btn1"onClick={()=>name2?SetName2(false):SetName2(true)}>To see styling in Class Component</button>
 {name&& <Function />}
 {name2&&<Class />}
</div>


  )
}
export default Outcome


