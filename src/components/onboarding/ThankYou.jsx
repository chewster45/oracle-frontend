import React from 'react';
import { Card, CardContent } from '@/components/ui/card/Card';
import { Button } from '@/components/ui/button/Button';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <Card className="max-w-lg w-full p-6 shadow-2xl rounded-2xl bg-white text-center">
        <CardContent>
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Thank You!</h2>
          <p className="text-gray-700 mb-6">
            Your pattern data has been saved. You can now view your personalized metaphysical profile on the dashboard.
          </p>
          <Button
            className="w-full text-lg py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white transition"
            onClick={() => navigate('/')}
          >
            Go to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;
