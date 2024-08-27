import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai"; // Importing an info icon
import soekarnoImg from "../../assets/Ir-Sukarno.png";
import soehartoImg from "../../assets/soeharto.png";

const ProfileSelection = () => {
  const people = [
    { name: "Soekarno", image: soekarnoImg },
    { name: "Soeharto", image: soehartoImg },
    // Add more people as needed
  ];

  return (
    <section className="relative w-full pt-32 pb-16 bg-gray-300 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl">
        {/* Left Column: Bio */}
        <div className="md:w-1/3 p-6 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">John Doe</h2>
          <h3 className="text-xl font-medium text-gray-600 mt-2">
            Senior Software Engineer
          </h3>
          <p className="text-gray-600 mt-4">
            John is a seasoned developer with over 10 years of experience in
            full-stack development. He specializes in building scalable web
            applications using modern technologies.
          </p>
          <div className="flex items-center mt-4 text-gray-500">
            <AiOutlineInfoCircle className="mr-2" />
            <span>References available upon request</span>
          </div>
        </div>

        {/* Center Column: Profile Picture */}
        <div className="md:w-1/3 flex justify-center items-center p-6">
          <div className="rounded-full overflow-hidden border-4 border-white w-40 h-40 md:w-48 md:h-48">
            <img
              src={soekarnoImg}
              alt="Soekarno"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Column: List of People */}
        <div className="md:w-1/3 p-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Team Members
          </h3>
          <ul className="space-y-4">
            {people.map((person, index) => (
              <li key={index} className="flex items-center space-x-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
                <span className="text-gray-800">{person.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfileSelection;
