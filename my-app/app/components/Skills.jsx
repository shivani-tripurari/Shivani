// Skills.jsx
"use client"; // Ensure this is a client component if using hooks or other client-side features



function Skills() {
  return (
    <div className="relative mb-20 px-4 py-0 h-[95vh] w-full overflow-hidden">
    

      <div className="skill-set absolute bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 h-[95%] md:h-4/5 lg:h-4/5 bg-transparent flex flex-col md:grid md:grid-cols-4 md:gap-2 lg:gap-2 items-center justify-center cursor-pointer">
        
        {/* Skill Column 1 */}
        <div className="flex flex-col items-center justify-between bg-transparent rounded-lg w-full h-full p-2 space-y-2">
          <div className="flex items-center justify-center w-full h-1/3 bg-transparent border-2 border-white rounded-lg hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-[#F3587A] text-lg md:text-xl lg:text-3xl font-bold">HTML</h2>
          </div>
          <div className="flex items-center justify-center w-full h-1/3 bg-[#F3587A] rounded-lg hover:-translate-x-1 transition-transform duration-300">
            <h2 className="text-gray-900 font-bold text-lg md:text-xl lg:text-3xl">CSS</h2>
          </div>
          <div className="flex items-center justify-center w-full h-1/3 bg-transparent border-2 border-white rounded-lg hover:translate-y-1 transition-transform duration-300">
            <h2 className="transform rotate-270  text-lg md:text-xl lg:text-3xl font-bold">React</h2>
          </div>
        </div>

        {/* Skill Column 2 */}
        <div className="flex flex-col items-center justify-between bg-transparent rounded-lg w-full h-full p-2 space-y-2 mt-4 md:mt-0">
          <div className="flex items-center justify-center w-full h-3/4 md:h-1/2 lg:h-1/2 bg-[#ff9130] rounded-lg hover:-translate-y-1 transition-transform duration-300">
            <h2 className="text-gray-900 font-bold  text-lg md:text-xl lg:text-3xl ">Node.js</h2>
          </div>
          <div className="flex items-center justify-center w-full h-1/2 bg-transparent border-2 border-white rounded-lg hover:translate-y-1 transition-transform duration-300">
            <h2 className="text-[#ff9130] font-bold text-lg md:text-xl lg:text-3xl">Data Visualization</h2>
          </div>
        </div>

        {/* Skill Column 3 */}
        <div className="flex flex-col items-center justify-between bg-transparent rounded-lg w-full h-full p-2 space-y-2 mt-4 md:mt-0">
          <div className="flex items-center justify-center w-full h-1/3 bg-transparent border-2 border-white rounded-lg hover:-translate-y-1 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-8 w-8 mr-2"
              fill="currentColor"
            >
              <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z" />
            </svg>
            <h2 className="text-white font-bold text-lg md:text-xl lg:text-3xl">Git/GitHub</h2>
          </div>
          <div className="flex items-center justify-center w-full h-1/3 bg-transparent border-2 border-white rounded-lg hover:translate-y-1 transition-transform duration-300">
            <h2 className="text-[#04a8b4] font-bold text-lg md:text-xl lg:text-3xl">JavaScript</h2>
          </div>
          <div className="flex items-center justify-center w-full h-1/3 bg-[#04a8b4] rounded-lg hover:translate-y-1 transition-transform duration-300">
            <h2 className="text-gray-900 font-bold text-lg md:text-xl lg:text-3xl">Express.js</h2>
          </div>
        </div>

        {/* Skill Column 4 */}
        <div className="flex flex-col items-center justify-between bg-transparent rounded-lg  w-full h-full p-2 space-y-2 mt-4 md:mt-0">
          <div className="flex items-center justify-center w-full h-2/3 bg-transparent border-2 border-white rounded-lg hover:-translate-x-1 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-8 w-8 mr-2"
              fill="currentColor"
            >
              <path d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z" />
              <path d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z" fill="#A6A385" />
              <path d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z" fill="#FFF" />
              <path d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z" fill="#499D4A" />
              <path d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z" fill="#FFF" />
              <path d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z" fill="#58AA50" />
            </svg>
            <h2 className="text-white font-bold text-lg md:text-xl lg:text-3xl">MongoDB</h2>
          </div>
          <div className="flex items-center justify-center w-full h-1/3 bg-[#00a56b] rounded-lg hover:translate-y-1 transition-transform duration-300">
            <h2 className="text-gray-900 font-bold text-lg md:text-xl lg:text-3xl">UI/UX</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
