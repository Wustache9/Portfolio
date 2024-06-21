import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "./progressBar";
import animatedhomepage from "../image/animated.png";
import attendance from "../image/atteandance.png";
import recruitment from "../image/recruitment.png";
export default function Skills() {
  const skill1 = "Figma";
  const skill2 = "Jira";
  const skill3 = "LucidChart";
  const skill4 = "Python";
  const skill5 = "Product Dev Life";
  const skill6 = "Sql";
  const progressValueHTML = 70;
  const progressValueCSS = 60;
  const progressValueJS = 80;
  const progressValueREACT = 60;
  const progressValueNodejs = 75;
  const progressValueMongodb = 70;
  
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  

  return (
    <>
      <hr />
      <div className="container">
        <div className="section-title " style={{ paddingBottom: 50 }}>
          <h2>Skills</h2>
        </div>

        <div  data-aos="fade-up">
          <ProgressBar value={progressValueHTML} skillName={skill1}  />
          <ProgressBar value={progressValueCSS} skillName={skill2} />
          <ProgressBar skillName={skill3} value={progressValueJS}></ProgressBar>
          <ProgressBar value={progressValueREACT} skillName={skill4} />
          <ProgressBar value={progressValueNodejs} skillName={skill5} />
          <ProgressBar value={progressValueMongodb} skillName={skill6} />
        </div>
      </div>
      <hr />
      <div className="container" id="project">
        <div className="section-title " style={{ paddingBottom: 50 }}>
          <h2>Projects</h2>
        </div>

        <div class="projects">
          <div className="project"data-aos='zoom-in'>
            <img src={animatedhomepage} className="project-img" />
            <h2 className="project-name">Pharma Labs Case Study</h2>
            <p className="project-details">
              Description: Developed a real-time control tower system for Redcliffe Lab to enhance sample tracking and operational efficiency,
              supporting over 10,000 monthly orders.
            </p>

            <div className="button">
              <a className="link"href="https://joyous-tempo-c95.notion.site/Case-Study-6-Pharma-Labs-276de9cedeb542ad9fa6c24068a6f94b?pvs=4" target="_blank">
                View Project
              </a>
            </div>
          </div>
          <div className="project" data-aos='zoom-in' data-aos-delay="500">
            <img src={recruitment} className="project-img" />
            <h2 className="project-name">Recruitment Solution</h2>
            <p className="project-details">
              Description: Developed frontend for Recruitment Solution
              application, enabling user registration, candidate search, and
              connection. Used HTML, CSS, JavaScript. Collaborated and
              implemented features.
            </p>

            <div className="button" >
              <a className="link"href="https://recruitment-solution-frontend.vercel.app/" target="_blank">
                View Project
              </a>
            </div>
          </div>
          <div className="project" data-aos='zoom-in' data-aos-delay="1000">
            <img src={attendance} className="project-img" />
            <h2 className="project-name">Attendance tracker</h2>
            <p className="project-details">
              Description: Developed an attendance management system for
              tracking student attendance. Created a timetable, visual calendar,
              and generated reports. Collaborated on system enhancements.it is made using MERN stack
            </p>
            <div className="button">
              <a className="link" href="https://attendancetracker-frontend.onrender.com/" target="_blank">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container" id="resume">
        <div  className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="resume" >
          <a
            href="https://flowcv.com/resume/k8er42o65s"
            target="_blank"
            className="animated-button1"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
