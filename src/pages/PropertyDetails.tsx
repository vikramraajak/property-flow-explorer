
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import DocumentModal from '@/components/DocumentModal';

const PropertyDetails = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<'land' | 'soil' | 'water' | null>(null);

  const documents = [
    {
      name: "Land Title & Survey",
      verifiedBy: "Revenue Department",
      status: "Verified",
      type: "land"
    },
    {
      name: "Soil Health Certificate",
      verifiedBy: "Agricultural Department",
      status: "Verified",
      type: "soil"
    },
    {
      name: "Water Rights & Source",
      verifiedBy: "Water Resources Department",
      status: "Verified",
      type: "water"
    }
  ];

  const openModal = (type: 'land' | 'soil' | 'water') => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <div className="bg-gray-200 h-[240px] mb-6 rounded-md"></div>
            
            <h2 className="text-2xl font-semibold mb-1">Premium Farmland</h2>
            <p className="text-gray-600 mb-2">North Bangalore</p>
            <p className="text-green-600 font-semibold mb-6">₹25,000 per acre/year</p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 border-b pb-4">
                <div>
                  <p className="text-sm text-gray-500">Total Area</p>
                  <p className="font-medium">3.2 acres</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lease Terms</p>
                  <p className="font-medium">2 years minimum</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Soil Type</p>
                  <p className="font-medium">Black Cotton</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Water Source</p>
                  <p className="font-medium">Canal + Borewell</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Available Documents</h3>
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 mb-4">
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
                      onClick={() => openModal(doc.type as 'land' | 'soil' | 'water')}
                    >
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  className="text-green-500 border-green-500"
                  onClick={() => navigate('/')}
                >
                  Back to Listings
                </Button>
                <Button 
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() => navigate('/application/property-details')}
                >
                  Continue
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Document Modals */}
      <DocumentModal 
        isOpen={activeModal === 'land'} 
        onClose={closeModal}
        title="Land Title & Survey"
        type="land"
      />
      
      <DocumentModal 
        isOpen={activeModal === 'soil'} 
        onClose={closeModal}
        title="Soil Health Certificate"
        type="soil"
      />
      
      <DocumentModal 
        isOpen={activeModal === 'water'} 
        onClose={closeModal}
        title="Water Rights & Source"
        type="water"
      />
    </div>
  );
};

export default PropertyDetails;
