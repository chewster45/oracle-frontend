import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card/Card';
import { Input } from '@/components/ui/input/Input';
import { Button } from '@/components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const MBTIStep = ({ data, setData }) => {
  const [mbti, setMbti] = useState(data?.mbti || '');
  const navigate = useNavigate();

  const handleNext = () => {
    setData(prev => ({ ...prev, mbti }));
    navigate('/onboarding/bloodtype');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <Card className="max-w-lg w-full p-6 shadow-2xl rounded-2xl bg-white">
        <CardContent>
          <ProgressBar step={4} total={6} />
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-center">What is your MBTI type?</h2>
          <Input
            type="text"
            placeholder="e.g., INFP"
            value={mbti}
            onChange={(e) => setMbti(e.target.value)}
            className="w-full mb-6"
          />
          <div className="flex justify-between">
            <Button onClick={() => navigate('/onboarding/birthplace')}>Back</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MBTIStep;
