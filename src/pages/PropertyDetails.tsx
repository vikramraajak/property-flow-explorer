
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PropertyDetails = () => {
  const navigate = useNavigate();

  const documents = [
    {
      name: "Land Title & Survey",
      verifiedBy: "Revenue Department",
      status: "Verified"
    },
    {
      name: "Soil Health Certificate",
      verifiedBy: "Agricultural Department",
      status: "Verified"
    },
    {
      name: "Water Rights & Source",
      verifiedBy: "Water Resources Department",
      status: "Verified"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <Card className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Premium Farmland</h2>
        <p className="text-gray-600 mb-2">North Bangalore</p>
        <p className="text-green-600 font-semibold mb-6">₹25,000 per acre/year</p>
        
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Available Documents</h3>
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={20} />
                <div>
                  <p className="font-medium">{doc.name}</p>
                  <p className="text-sm text-gray-500">Verified by: {doc.verifiedBy}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="text-green-500 border-green-500"
                onClick={() => navigate(`/document/${index + 1}`)}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            className="text-green-500 border-green-500"
          >
            Request Additional Verification
          </Button>
          <Button 
            className="bg-green-500 hover:bg-green-600"
            onClick={() => navigate('/application/property-details')}
          >
            Continue
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PropertyDetails;
