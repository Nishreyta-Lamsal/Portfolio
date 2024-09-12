import React from "react";

const Projects = ({ image, title, description, link, id }) => {
  return (
    <div className="w-full h-full cursor-pointer sm:w-64 md:w-72 lg:w-96 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col group">
      <div className="relative overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out">
        <img className="w-full h-52 object-contain bg-black" src={image} alt={title} />
      </div>
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        </div>
        <a
          href={link}
          className="mt-4 inline-block bg-[#171d4c] text-white mx-auto py-2 px-4 rounded hover:bg-[#2c3778] hover:shadow-lg transition-colors duration-300 text-center"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default Projects;
