import React from "react";
import aboutme from "../assets/aboutme.png";

const AboutMe = () => {
  return (
    <div className="mx-auto px-8 md:px-16 lg:px-24 max-sm:mt-10">
      <h2 className="text-4xl font-bold text-center mb-10 ">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12 max-sm:-mt-6">
        <img
          src={aboutme}
          alt="Aboutme"
          className="w-72 h-80 rounded object-contain mb-8 md:mb-0 xl:mr-20 xl:-mt-64"
        />
        <div className="flex-1">
          <p className="text-lg mb-8">
            I am a front-end developer with a strong passion for creating
            visually appealing andinteractive user interfaces. My expertise lies
            in using HTML,CSS, JavaScript, and React to build responsive and
            engaging web applications.While I’m primarily focused on front-end
            development, I also have an understanding of back-end technologies,
            including Python and Java, which allows me to approach projects with
            a well-rounded perspective.
          </p>
          <div className="px-4 md:px-8 lg:px-16 xl:px-24">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-xl mb-4 lg:mb-6 xl:-ml-24 font-semibold">
              Language Proficiency
            </p>
            <ol className="space-y-4">
              <li className="text-lg md:text-xl lg:text-xl xl:-ml-24">
                HTML, CSS
              </li>
              <div className="w-full max-w-[500px] bg-gray-300 rounded-full xl:-ml-24">
                <div
                  className="h-2 bg-green-800 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <li className="text-lg md:text-xl lg:text-xl xl:-ml-24">
                JavaScript
              </li>
              <div className="w-full max-w-[500px] bg-gray-300 rounded-full xl:-ml-24">
                <div
                  className="h-2 bg-green-800 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <li className="text-lg md:text-xl lg:text-xl xl:-ml-24">React</li>
              <div className="w-full max-w-[500px] bg-gray-300 rounded-full xl:-ml-24">
                <div
                  className="h-2 bg-green-800 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </ol>
            <div className="mt-8 flex justify-center md:justify-start xl:mb-20">
              <a href="#contact">
                <button className="border-2 border-black bg-[#1b1c1e] text-white px-4 mt-5 py-2 rounded-full hover:bg-white hover:text-black hover:shadow-lg transition-colors duration-300">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
