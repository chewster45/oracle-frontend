import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import BirthDateStep from './BirthDateStep';
import BirthTimeStep from './BirthTimeStep';
import BirthPlaceStep from './BirthPlaceStep';
import MBTIStep from './MBTIStep';
import ConfirmStep from './ConfirmStep';
import ThankYou from './ThankYou';

const OnboardingContainer = () => {
  const [onboardingData, setOnboardingData] = useState({});

  return (
    <Routes>
      <Route path="welcome" element={<WelcomeScreen />} />
      <Route path="birthdate" element={<BirthDateStep data={onboardingData} setData={setOnboardingData} />} />
      <Route path="birthtime" element={<BirthTimeStep data={onboardingData} setData={setOnboardingData} />} />
      <Route path="birthplace" element={<BirthPlaceStep data={onboardingData} setData={setOnboardingData} />} />
      <Route path="mbti" element={<MBTIStep data={onboardingData} setData={setOnboardingData} />} />
      <Route path="confirm" element={<ConfirmStep data={onboardingData} />} />
      <Route path="thankyou" element={<ThankYou />} />
    </Routes>
  );
};

export default OnboardingContainer;
