import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-100 p-6 flex flex-col md:flex-row justify-between items-center md:items-start">
      <div className="text-blue-700 text-lg mb-4 md:mb-0">
        <p>
          Looking to start a new project or just want to say hi? Send me an
          email and I’ll do my best to reply within 24 hrs!
        </p>
      </div>
      <div className="text-blue-700 text-lg flex flex-col items-center md:items-end">
        <a href="mailto:info@gmail.com" className="mb-2">
          info@gmail.com
        </a>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </div>
  );
}
