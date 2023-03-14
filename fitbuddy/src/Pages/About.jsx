import React from "react";
import "./About.css";





const About = () =>{
    return(
        <>
        <div className="about-section" style={{backgroundImage: 'url("https://rb.gy/w2tarh")'}}>
          <h1>About Us</h1>
          <p>"Get fit together with Gym FitBuddy - your ultimate workout companion!"</p>
          <p>
          "Stay motivated, track progress, and achieve your fitness goals with the help of Gym FitBuddy - your personal fitness assistant."
          Fitbuddy is a family business founded in 2014. With over 10 years’ experience within the Fitness industry,FitBuddy is built on a foundation of passion for the fitness Industry. 
          We aspire to help both our clients as well as suppliers.
          
          </p>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src= "/Images/abhishek.jpg" alt="abhi" style={{ width: "100%" }} />
              <div className="container">
                <h2><center>Ahishek Baghel</center></h2>
                <p className="title"><center>CEO &amp; Founder</center></p>
                <p><center>"Leading with vision, driving with passion."</center></p>
                <p><center>abhisek@FitBuddy.in</center></p>
                <p>
                  <button className="button">Contact</button>
                  
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src= "/Images/avni.jpg" alt="avni" style={{ width: "100%" }} />
              <div className="container">
                <h2><center>Avni Jain</center></h2>
                <p className="title"><center>Director</center></p>
                <p><center>"Guiding the way towards success"</center></p>
                <p><center>avni@FitBuddy.in</center></p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src= "/Images/palash.jpg" alt="palash" style={{ width: "100%" }} />
              <div className="container">
                <h2><center>Mr. Palash</center></h2>
                <p className="title"><center>Designer</center></p>
                <p><center>"Designing a better world,one pixel at a time."</center></p>
                <p><center>palash@Fitbuddy.in</center></p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src= "/Images/deepjyoti.jpg" alt="deep" style={{ width: "100%" }} />
              <div className="container">
                <h2><center>DeepJyoti Saha</center></h2>
                <p className="title"><center>CMO</center></p>
                <p><center>"Building brands, shaping futures."</center></p>
                <p><center>deepjyoti@Fitbuddy.in</center></p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src= "/Images/rohit.JPG" alt="rohit" style={{ width: "100%" }} />
              <div className="container">
                <h2><center>Rohit bhosale</center></h2>
                <p className="title"><center>Representive</center></p>
                <p><center>"Your voice, my action - together we make it."</center></p>
                <p><center>rohit@Fitbuudy.in</center></p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          </div>
      </>
      
    )
}
export default About;
