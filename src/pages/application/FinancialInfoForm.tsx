
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ApplicationProgress from "@/components/ApplicationProgress";

const FinancialInfoForm = () => {
  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('/application/documents');
  };

  const handleBack = () => {
    navigate('/application/farming-plan');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Farm Land Application</h1>
        <ApplicationProgress currentStep={3} />
        
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-6">Financial Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investment Budget (in ₹)
              </label>
              <Input 
                type="number" 
                placeholder="Enter your total investment budget"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Do you require a loan?
              </label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center">
                  <input type="radio" name="loan" className="mr-2" value="yes" />
                  Yes
                </label>
                <label className="flex items-center">
                  <input type="radio" name="loan" className="mr-2" value="no" defaultChecked />
                  No
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Name (if loan required)
              </label>
              <Input 
                type="text" 
                placeholder="Enter bank name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Account Number
              </label>
              <Input 
                type="text" 
                placeholder="Enter your bank account number"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                IFSC Code
              </label>
              <Input 
                type="text" 
                placeholder="Enter IFSC code"
                required
              />
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handleBack}
            >
              Back
            </Button>
            <Button 
              className="bg-green-500 hover:bg-green-600"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FinancialInfoForm;
