import React from "react";
import profile from "../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center h-auto w-[90vw] lg:h-[90vh] md:h-[70vh] p-4 md:p-10 md:-mb-8 mx-auto">
      <div className="flex-shrink-0 w-full sm:w-1/3 md:w-1/2 lg:w-1/2 pr-0 md:pr-32 pl-0 md:pl-28 mb-6 md:mb-0">
        <img
          className="hidden sm:block rounded-full w-3/4 md:w-full h-auto mx-auto"
          src={profile}
          alt="profile"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className=" text-5xl sm:text-3xl md:text-3xl font-bold opacity-0 animate-fadeInFromBottom">
          Hi I'm
        </h1>
        <p className="text-[#4b5487] text-5xl mt-3 font-bold mb-8">
          Nishreyta Lamsal!
        </p>
        <p className="text-gray-700 mb-8 text-xl sm:text-lg md:text-xl opacity-0 animate-fadeInFromTop">
          A passionate front-end developer with a keen eye for design and a love
          for creating dynamic web experiences.
        </p>
        <div className="flex justify-center md:justify-start mb-6 mt-4 space-x-4 opacity-0 animate-fadeInFromTopDelay">
          <a
            href="https://www.linkedin.com/in/nishreyta-lamsal-313777312/"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-4xl sm:text-5xl"
            />
          </a>
          <a
            href="https://github.com/Nishreyta-Lamsal"
            className="text-gray-900 hover:text-gray-700 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-4xl sm:text-5xl" />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1JzQdcp3TV-2i6SNCRheAZmqLbCf5f2PY/view?usp=sharing"
          className="inline-block border-2 border-black bg-[#1b1c1e] text-white pr-4 py-3
       pl-4 rounded-full hover:bg-white hover:text-black hover:shadow-lg transition-colors duration-300 opacity-0 animate-fadeInFromBottomDelay w-full md:w-auto text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Profile;
