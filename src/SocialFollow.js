import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faInstagram,
    
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-links mt-3 text-center">

          <div class="social-container">

                <a href="https://github.com/Vaishali054" target="_blank"
                    className="Github social ">
                   <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/vaishali2054/" target="_blank"
                   className="Linkedin social">
                   <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href=" " target="_blank"
                   className="twitter social">
                   <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://instagram.com/_vaishali_054?igshid=OTk0YzhjMDVlZA==" target="_blank"
                   className="instagram social">
                   <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
         </div>
   </div>
  );
}