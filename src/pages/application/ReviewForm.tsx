
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from 'lucide-react';
import ApplicationProgress from "@/components/ApplicationProgress";
import { toast } from "@/components/ui/sonner";

const ReviewForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleBack = () => {
    navigate('/application/documents');
  };
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/application/success');
      toast.success("Application submitted successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Farm Land Application</h1>
        <ApplicationProgress currentStep={5} />
        
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-6">Review Application</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-800 mb-2">Property Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Property Name</p>
                  <p>Premium Farmland</p>
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p>North Bangalore</p>
                </div>
                <div>
                  <p className="text-gray-500">Rent</p>
                  <p>₹25,000 per acre/year</p>
                </div>
                <div>
                  <p className="text-gray-500">Lease Duration</p>
                  <p>2 years</p>
                </div>
              </div>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-800 mb-2">Farming Plan</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Crop Type</p>
                  <p>Organic Tomatoes</p>
                </div>
                <div>
                  <p className="text-gray-500">Expected Yield</p>
                  <p>2 tons per acre</p>
                </div>
                <div>
                  <p className="text-gray-500">Farming Method</p>
                  <p>Organic</p>
                </div>
              </div>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-800 mb-2">Financial Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Investment Budget</p>
                  <p>₹1,50,000</p>
                </div>
                <div>
                  <p className="text-gray-500">Loan Required</p>
                  <p>No</p>
                </div>
                <div>
                  <p className="text-gray-500">Bank Account</p>
                  <p>XXXX6789</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Uploaded Documents</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
                  <p>ID_Proof.pdf</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
                  <p>Bank_Statement.pdf</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
                  <p>Income_Proof.pdf</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">
                I certify that all the information provided is correct and I agree to the terms and conditions.
              </span>
            </label>
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handleBack}
              disabled={isSubmitting}
            >
              Back
            </Button>
            <Button 
              className="bg-green-500 hover:bg-green-600"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ReviewForm;
