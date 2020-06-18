import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Register from'./Register';
import OTP from './OTP';
class App extends Component  {
  state={
    frameToggle:true,
    moblie:'',
    otp:''
  }
  verifyOTP=()=>
  {
    if(this.state.otp!=1234)
    {
      alert("Invalid OTP");
      return;
    }
    
    alert("verifyed")
    this.setState({
      frameToggle:true,
      
    })
    
  }
  sendotp=()=>
  {
    if(this.state.moblie.length!=10)
    {
      alert("Invalid number");
      return;
    }
    this.setState({
      frameToggle:false
    })
    alert("OTP:1234");
  }
  validateMob=(event)=>{
    this.setState({
      moblie:event.target.value,
    })


  }
  validateOTP=(event)=>{
    this.setState({
      otp:event.target.value,
    })

  }
  render(){
    return(
    <div className="App">
      {this.state.frameToggle? <Register name={this.state.moblie} click={this.sendotp} changed={this.validateMob}> </Register>:
      <OTP name={this.state.otp} click={this.verifyOTP} changed={this.validateOTP}></OTP>
      }
    </div>
  );
  }
}

export default App;
