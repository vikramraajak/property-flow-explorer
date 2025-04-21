
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const SuccessPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState(0);
  
  useEffect(() => {
    // Start progress bar animation
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);
    
    // Auto-redirect after 3 seconds
    const redirect = setTimeout(() => {
      navigate('/');
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6 flex items-center justify-center">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="bg-green-100 h-24 w-24 rounded-full mx-auto flex items-center justify-center">
          <CheckCircle className="h-14 w-14 text-green-500" />
        </div>
        
        <h1 className="text-2xl font-semibold mt-6 mb-2">Application Submitted!</h1>
        <p className="text-gray-600 mb-6">
          Your application has been successfully submitted. 
          We will review it and get back to you soon.
        </p>
        
        <div className="text-sm text-gray-600 mb-2">
          Redirecting to home in a few seconds...
        </div>
        <Progress value={progress} className="h-1" />
      </Card>
    </div>
  );
};

export default SuccessPage;
