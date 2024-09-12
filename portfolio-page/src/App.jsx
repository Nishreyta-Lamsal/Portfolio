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
      </div>

      <div id="aboutme">
        <AboutMe />
      </div>

      <div id="projects" className="mt-10 mb-10 h-full">
        <p className="text-5xl font-bold text-center mb-20 text-[#222831] mt-10">
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
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
