import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card/Card';
import { Input } from '@/components/ui/input/Input';
import { Button } from '@/components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const BirthPlaceStep = ({ data, setData }) => {
  const [birthPlace, setBirthPlace] = useState(data?.birthPlace || '');
  const navigate = useNavigate();

  const handleNext = () => {
    setData(prev => ({ ...prev, birthPlace }));
    navigate('/onboarding/mbti');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <Card className="max-w-lg w-full p-6 shadow-2xl rounded-2xl bg-white">
        <CardContent>
          <ProgressBar step={3} total={6} />
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-center">Where were you born?</h2>
          <Input
            type="text"
            placeholder="City, Country"
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
            className="w-full mb-6"
          />
          <div className="flex justify-between">
            <Button onClick={() => navigate('/onboarding/birthtime')}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BirthPlaceStep;
