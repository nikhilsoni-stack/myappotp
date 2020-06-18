import React, { Component } from 'react';
const Register=(pros)=>{
    //pros.innerText="";
    return (


<div>
    <label>MobileNumber</label><br></br>
    <input id="moblieNumber" type='number' onChange={pros.changed} value={pros.name}></input>
    <button onClick={pros.click}>sendOtp</button>
  </div>
        
    );
}
export default Register