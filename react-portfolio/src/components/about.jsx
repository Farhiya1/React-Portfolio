import React from "react";
import profileShot from "../assets/images/ProfileShot.PNG";



function About () {
    return (
        <section className="sub-section" id="about-me">
        <div className="profileImage-container">
            <img className="profileImage" src={profileShot} alt="Farhiya's Profile Shot" /> 
          </div>

        
       <hr></hr>
      <div class="bio">
        <h2>About Me</h2>
        <p>
          Hi! I am Farhiya Mahamud, currently building my skills as a Junior Full Stack Developer. I am
          an Exercise and Health Specialist, with a passion for interactive front and back-end web development and the great
          outdoors.
       
        
          <section>
        
           <button class="btn"> <a className="cv-link" href= "https://drive.google.com/file/d/1ZzHUpFU-ebJ0XV4Yrhnh8AxMrJZIaTm5/view?usp=sharing">CV </a></button>
           <br></br>
          
       
          </section>
        </p>
      </div>
    
   
      </section>
       
    )
}

export default About