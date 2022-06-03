import React from "react";
import Eventspic from "../assets/images/Screenshot1-Events-API.png";
import Workplannerpic from "../assets/images/screencapture2-WorkPlanner.png";
import ScreenshotTwo from "../assets/images/Screenshot2.png";
import WeatherAppPic from "../assets/images/screencapture-WeatherApp.png"

function Projects () {
    return (
        <section class="second-sub-section" id="projects">
      <h2>Projects</h2>
      <div class="project-container">
        <div class="project-card">
          <img
            class="project-image"
            src={Eventspic}
            alt="Project 1 Image"
          />
           <h3>Events API Project</h3>
          <p class="subtext">
           Using ticket masters and open weather API to allow the user to see events near them and the weather for that day. This is done when user searches by location within the UK.
          </p>
         
          <p className="subtext">
            <a
              className="project-link"
              href="https://github.com/Farhiya1/EventsMasterUK.git"
              > View here 
              </a>
          </p>
          </div>
          <div class="project-card">
          <img
            class="project-image"
            src={Workplannerpic}
            alt="Project 2 Image"
          />
          <hr />
          <h3>Work Planner</h3>
          <p class="subtext">
            A simple calendar application that allows a user to save events for each hour of the day. 
          </p>
          
          <p class="subtext">
              
            <a
              class="project-link"
              href="https://github.com/Farhiya1/WorkPlanner.git"
              > View here</a>
          </p>
        </div>
        <div class="project-card">
          <img
            class="project-image"
            src= {ScreenshotTwo}
            alt="Project 3 Image"
          />
          <hr />
          <h3>Collaborative full-stack application</h3>
          <p class="subtext">
           using the MVC paradigm, created a server-side API, added user authentication, and connected to a database.
          </p>
          <hr />
          <p class="subtext">
            <a class="project-link" href="https://github.com/Farhiya1/Hackathon-Suite"
              > View here</a>
          </p>
        </div>
        <div class="project-card">
          <img
            class="project-image"
            src= {WeatherAppPic}
            alt="Project 4 Image"
          />
          <hr />
          <h3>Weather API</h3>
          <p class="subtext">
            Weather dashboard application using two weather API's to display current weather and forecast for the next 5 days, from anywhere in the world.
          </p>
          <hr />
          <p class="subtext">
            <a class="project-link" href="https://github.com/Farhiya1/Weather-App.git"
              > View here</a>
          </p>
        </div>
          </div>
          </section>
    )
}

export default Projects 