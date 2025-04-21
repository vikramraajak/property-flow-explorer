
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ApplicationProgress from "@/components/ApplicationProgress";

const FarmingPlanForm = () => {
  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('/application/financial-info');
  };

  const handleBack = () => {
    navigate('/application/property-details');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Farm Land Application</h1>
        <ApplicationProgress currentStep={2} />
        
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-6">Farming Plan</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Crop Type
              </label>
              <Input 
                type="text" 
                placeholder="Enter crop type (e.g., Tomatoes, Rice)"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expected Yield (per acre)
              </label>
              <Input 
                type="text" 
                placeholder="E.g., 2 tons, 500 kg"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Farming Method
              </label>
              <select 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              >
                <option value="">Select farming method</option>
                <option value="organic">Organic</option>
                <option value="traditional">Traditional</option>
                <option value="hydroponics">Hydroponics</option>
                <option value="permaculture">Permaculture</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Requirements
              </label>
              <textarea 
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[100px]"
                placeholder="Describe any specific requirements for your farming plan"
              ></textarea>
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

export default FarmingPlanForm;
