import React, { Component } from 'react';
const OTP=(pros)=>{
    //pros.innerText="";
    return (
        <div>
    <label>Enter OTP</label><br></br>
    <input id="otp" type='number' onChange={pros.changed} value={pros.name}></input>
    <button onClick={pros.click}>verifyed</button>
  </div>


        
    );
}
export default OTP