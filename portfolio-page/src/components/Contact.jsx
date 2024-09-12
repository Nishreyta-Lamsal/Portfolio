import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  // State for form inputs
  const [form, setForm] = useState({
    name: "",
    email: "",
    query: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", form);
    // Reset form
    setForm({
      name: "",
      email: "",
      query: "",
    });
  };

  return (
    <section className="py-10 ">
      <p className="text-5xl font-bold text-center mb-9 text-[#222831]">
        Contact Me
      </p>

      <div className="flex items-center justify-center space-y-3 flex-col text-lg text-gray-900">
        <p className="ml-6 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10">
          Feel free to reach out to me for any queries.
        </p>
        <p>
          <strong className="text-black">Phone:</strong> +977 9761795259
        </p>
        <p>
          <strong className="text-black">Email:</strong> nishreytal@gmail.com
        </p>
      </div>

      <div className="flex flex-col items-center mt-8 px-4 md:px-8 lg:px-16">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="query"
            >
              Query
            </label>
            <textarea
              id="query"
              name="query"
              value={form.query}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-5 border-2 border-black bg-[#1b1c1e] text-white rounded-full hover:bg-white hover:text-black hover:shadow-lg transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex space-x-4 mt-6 items-center justify-center">
        <a
          href="https://x.com/nishreytal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a
          href="https://www.facebook.com/nishreyta.lamsal.3?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:text-blue-700 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a
          href="https://www.instagram.com/nishreyta_lamsal?igsh=MTdpeWg3Z3U4OWluag=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-900 hover:text-red-700 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>

        <a
          href="https://www.snapchat.com/add/nishreyta_l2020?share_id=eS_VPN6naHs&locale=en-GB"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-600 hover:text-yellow-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faSnapchat} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
