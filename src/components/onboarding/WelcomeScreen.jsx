import React from 'react';
import { Card, CardContent } from '@/components/ui/card/Card';
import { Button } from '@/components/ui/button/Button';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <Card className="max-w-lg w-full p-6 shadow-2xl rounded-2xl bg-white">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-4 text-indigo-700">Welcome to Pattern Architect</h1>
          <p className="text-center text-gray-600 mb-8">
            This journey will help you unlock a personalized metaphysical profile using Astrology, Human Design, Numerology, and more.
          </p>
          <Button
            className="w-full text-lg py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white transition"
            onClick={() => navigate('/onboarding/birthdate')}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
