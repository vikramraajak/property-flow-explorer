
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ApplicationProgress from "@/components/ApplicationProgress";

const PropertyDetailsForm = () => {
  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('/application/farming-plan');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Farm Land Application</h1>
        <ApplicationProgress currentStep={1} />
        
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-6">Property Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Name
              </label>
              <Input 
                type="text" 
                value="Premium Farmland" 
                readOnly 
                className="bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <Input 
                type="text" 
                value="North Bangalore" 
                readOnly 
                className="bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rent per acre/year
              </label>
              <Input 
                type="text" 
                value="₹25,000" 
                readOnly 
                className="bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Owner Name
              </label>
              <Input 
                type="text" 
                value="Priya Sharma" 
                readOnly 
                className="bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lease Duration (in years)
              </label>
              <Input 
                type="number" 
                min="1"
                max="5"
                placeholder="Enter lease duration"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 2 years required</p>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/property/1')}
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

export default PropertyDetailsForm;
