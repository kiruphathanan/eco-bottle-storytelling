// components/ProgressBar.jsx
import React from 'react';

const ProgressBar = () => {
  const chapters = [
    { label: 'Intro', color: 'bg-green-400' },
    { label: 'Problem', color: 'bg-red-400' },
    { label: 'Solution', color: 'bg-blue-400' },
    { label: 'Benefits', color: 'bg-purple-400' },
    { label: 'Join Us', color: 'bg-emerald-400' }
  ];

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-center space-y-6">
        {/* Progress Line */}
        <div className="w-1 h-64 bg-gray-300 rounded-full relative">
          <div
            className="w-1 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full absolute top-0"
            style={{ height: '30%' }}
          ></div>
        </div>

        {/* Chapter Dots */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full flex flex-col justify-between py-2">
          {chapters.map((chapter, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div
                className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${chapter.color} transition-all duration-300 hover:scale-125`}
              ></div>
              <span className="text-xs text-white font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 px-2 py-1 rounded">
                {chapter.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;