import React, { useEffect, useState } from 'react';

const PatternDashboard = () => {
  const [patternData, setPatternData] = useState(null);

  useEffect(() => {
    // Get saved onboarding data from localStorage
    const savedData = localStorage.getItem('onboardingData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setPatternData(parsedData);
    }
  }, []);

  if (!patternData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">No Pattern Available</h2>
          <p className="text-gray-600 mb-4">Please complete the onboarding process to view your personalized pattern.</p>
          <a
            href="/onboarding/welcome"
            className="inline-block mt-4 px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
          >
            Start Onboarding
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Your Sacred Pattern</h1>
      <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <p><strong>🗓️ Birth Date:</strong> {patternData.birthDate}</p>
        <p><strong>⏰ Birth Time:</strong> {patternData.birthTime}</p>
        <p><strong>📍 Birth Place:</strong> {patternData.birthPlace}</p>
        <p><strong>🧬 MBTI:</strong> {patternData.mbti}</p>
        <p><strong>🩸 Blood Type:</strong> {patternData.bloodType}</p>
        <p><strong>💫 Lifestyle:</strong> {patternData.lifestyle}</p>
      </div>
    </div>
  );
};

export default PatternDashboard;
