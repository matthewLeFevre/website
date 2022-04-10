import React from "react";
import Me from "../assets/images/me.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { fabGithub } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero__wrapper'>
        <img src={Me} />
        <div className='hero__details'>
          <h1>I'm Happy You're Here!</h1>
          <p>
            I have been actively working and applying myself as a software
            developer for web and mobile platforms since 2017. I would love to
            share more about the awesome experience I have been having with you.
          </p>
          <p>
            You are welcome to browse this web-page to your hearts content! If
            you would like to have a more in-depth conversation about my
            experience{" "}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/matthew-lefevre/'
            >
              connect with me on LinkedIn
            </a>
            .
          </p>
          <a
            className='btn'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/matthewLeFevre'
          >
            <FontAwesomeIcon icon={faGithub} size='lg' color={"#223843"} />{" "}
            Github
          </a>
          <a
            className='btn'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/matthew-lefevre/'
          >
            <FontAwesomeIcon icon={faLinkedin} size='lg' color={"#223843"} />{" "}
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
