import React from 'react';
import { Card, CardContent } from '@/components/ui/card/Card';
import { Button } from '@/components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const ConfirmStep = ({ data }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Save data to Local Storage
    localStorage.setItem('onboardingData', JSON.stringify(data));
    // Navigate to Thank You page
    navigate('/onboarding/thankyou');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <Card className="max-w-lg w-full p-6 shadow-2xl rounded-2xl bg-white">
        <CardContent>
          <ProgressBar step={6} total={6} />
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-center">Confirm Your Details</h2>
          <div className="text-gray-700 mb-6 space-y-2">
            <p><strong>Birth Date:</strong> {data.birthDate}</p>
            <p><strong>Birth Time:</strong> {data.birthTime}</p>
            <p><strong>Birth Place:</strong> {data.birthPlace}</p>
            <p><strong>MBTI:</strong> {data.mbti}</p>
            <p><strong>Blood Type:</strong> {data.bloodType}</p>
            <p><strong>Lifestyle:</strong> {data.lifestyle}</p>
          </div>
          <div className="flex justify-between">
            <Button onClick={() => navigate('/onboarding/lifestyle')}>Back</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfirmStep;
