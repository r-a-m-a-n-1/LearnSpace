import React, { useState, useEffect } from "react";
import logoSupport from '/free_support.png';
import logoLectures from '/best_video.png';
import logoNotes from '/notes.png';

const AmazingFeaturePage = () => {
  const fullText = "Amazing Features";
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-4 py-16">
      {/* Animated Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-2 text-center tracking-wide">
        {displayedText}
        <span className="border-r-2 border-green-400 animate-pulse ml-1"></span>
      </h1>
      <p className="text-gray-400 text-lg mb-10 text-center">
        Discover why our platform is perfect for students
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-pink-600 to-purple-700 p-8 rounded-3xl shadow-xl text-white hover:scale-105 transform transition duration-300 backdrop-blur-md border border-white/10">
          <img src={logoSupport} alt="Free Support" className="w-20 h-20 mx-auto mb-6 drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-3 text-white text-center">Free Support</h3>
          <p className="text-center text-gray-200">
            Get access to study materials, lectures, previous year papers, and support for any doubts — all in one place.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-pink-600 to-purple-700 p-8 rounded-3xl shadow-xl text-white hover:scale-105 transform transition duration-300 backdrop-blur-md border border-white/10">
          <img src={logoLectures} alt="Best Video Lectures" className="w-20 h-20 mx-auto mb-6 drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-3 text-white text-center">Best Video Lectures</h3>
          <p className="text-center text-gray-200">
            Semester-wise, high-quality lectures tailored for your academic needs. No more scattered YouTube searches!
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-br from-pink-600 to-purple-700 p-8 rounded-3xl shadow-xl text-white hover:scale-105 transform transition duration-300 backdrop-blur-md border border-white/10">
          <img src={logoNotes} alt="Study Notes" className="w-20 h-20 mx-auto mb-6 drop-shadow-lg" />
          <h3 className="text-2xl font-bold mb-3 text-white text-center">Study Material & Notes</h3>
          <p className="text-center text-gray-200">
            All resources organized smartly — notes, lectures, and papers — easily accessible, exactly when you need them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmazingFeaturePage;
