import React, {useState} from "react";
import "./Bmi.css";

const BMICal = () =>{
    
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div className="app">
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Weight (kg)</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height (m)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn' type='submit' style={{backgroundColor: "black", color: "white"}}>Submit</button>
          <button className='btn btn-outline' style={{backgroundColor: "black", color: "white"}} onClick={reload} type='submit'>Reload</button>
        </div>
      </form>
 
      <div className='center' >
        <h3>Your BMI is: {bmi}</h3>
        <p style={{backgroundColor: "lightskyblue", color: "white", borderRadius:"30px", fontSize:"20px"}} >{message}</p>
      </div>
    </div>
  </div>
  <div></div>
  </div>
  );
}
export default BMICal;