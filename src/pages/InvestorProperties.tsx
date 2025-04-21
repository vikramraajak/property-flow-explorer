
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }: any) => {
  const navigate = useNavigate();

  return (
    <Card className="w-[600px] p-6 mb-6">
      <div className="bg-gray-200 h-[200px] mb-4 rounded-md"></div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{property.name}</h3>
          <span className="text-green-600 font-semibold">₹{property.price}/year</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div>
            <p>Total Area</p>
            <p className="font-medium">{property.area} acres</p>
          </div>
          <div>
            <p>Lease Terms</p>
            <p className="font-medium">{property.leaseTerm}</p>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div>
            <p>Soil Type</p>
            <p className="font-medium">{property.soilType}</p>
          </div>
          <div>
            <p>Water Source</p>
            <p className="font-medium">{property.waterSource}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-600">Available Facilities</p>
          <p className="font-medium">{property.facilities}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-sm text-gray-600">Owner</p>
            <p className="font-medium">{property.owner}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Profession</p>
            <p className="font-medium">{property.profession}</p>
          </div>
        </div>
        <Button 
          className="w-full bg-green-500 hover:bg-green-600" 
          onClick={() => navigate(`/property/${property.id}`)}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

const InvestorProperties = () => {
  const properties = [
    {
      id: 1,
      name: "Fertile Agricultural Plot",
      price: "25,000",
      area: "3.2",
      leaseTerm: "2 years minimum",
      soilType: "Black Cotton",
      waterSource: "Canal + Borewell",
      facilities: "Borewell, Storage Shed, Fencing",
      owner: "Priya Sharma",
      profession: "Software Engineer"
    },
    // Add more properties as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Available Properties for Rent</h1>
          <Button variant="outline" className="border-green-500 text-green-500">
            For Rent
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorProperties;
