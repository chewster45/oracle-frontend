import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card/Card';
import { Input } from '@/components/ui/input/Input';
import { Button } from '@/components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const BirthTimeStep = ({ data, setData }) => {
  const [birthTime, setBirthTime] = useState(data?.birthTime || '');
  const navigate = useNavigate();

  const handleNext = () => {
    setData(prev => ({ ...prev, birthTime }));
    navigate('/onboarding/birthplace');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <Card className="max-w-lg w-full p-6 shadow-2xl rounded-2xl bg-white">
        <CardContent>
          <ProgressBar step={2} total={6} />
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-center">What time were you born?</h2>
          <Input
            type="time"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
            className="w-full mb-6"
          />
          <div className="flex justify-between">
            <Button onClick={() => navigate('/onboarding/birthdate')}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BirthTimeStep;
