import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card/Card';
import { Input } from '@/components/ui/input/Input';
import { Button } from '@/components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const BirthDateStep = ({ data, setData }) => {
  const [birthDate, setBirthDate] = useState(data?.birthDate || '');
  const navigate = useNavigate();

  const handleNext = () => {
    setData(prev => ({ ...prev, birthDate }));
    navigate('/onboarding/birthtime');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <Card className="max-w-lg w-full p-6 shadow-2xl rounded-2xl bg-white">
        <CardContent>
          <ProgressBar step={1} total={6} />
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-center">When were you born?</h2>
          <Input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full mb-6"
          />
          <div className="flex justify-between">
            <Button onClick={() => navigate('/onboarding/welcome')}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BirthDateStep;
