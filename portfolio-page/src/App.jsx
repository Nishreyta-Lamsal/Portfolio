import React, { useEffect } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { data } from "./assets/projectData";
import AboutMe from "./components/AboutMe";

const App = () => {
  useEffect(() => {
    // Add smooth scroll behavior to all anchor links
    const handleAnchorClick = (event) => {
      const target = event.target;
      if (
        target.tagName === "A" &&
        target.getAttribute("href").startsWith("#")
      ) {
        event.preventDefault();
        const targetId = target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    // Attach event listener to document
    document.addEventListener("click", handleAnchorClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-[#fff]">
      <Header />

      <div id="profile">
        <Profile />
        <hr className="-mt-10 mb-10 border-spacing-0 border-slate-500 h-1 w-full sm:w-[90%] sm:ml-10 md:w-[80%] md:ml-20 lg:w-[90%] lg:ml-24 max-sm:mt-14" />
      </div>

      <div id="aboutme">
        <AboutMe />
        <hr className="mt-5 mb-10 border-spacing-0 border-slate-500 h-1 w-full sm:w-[90%] sm:ml-10 md:w-[90%]  lg:w-[90%] lg:ml-24 max-sm:mt-14" />
      </div>

      <div id="projects" className="mt-10 mb-2 h-full max-sm:mt-20">
        <p className="text-5xl font-bold text-center mb-16 text-[#222831] mt-10 ">
          My Projects
        </p>
        <div className="flex flex-wrap gap-12 justify-center">
          {data.map((item, index) => (
            <Projects
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
        <hr className="mt-28 border-spacing-0 border-slate-500 h-1 w-full sm:w-[90%] sm:ml-10 md:w-[80%] md:ml-20 lg:w-[90%] lg:ml-24 max-sm:mt-14" />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
