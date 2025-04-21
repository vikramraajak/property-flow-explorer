import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { MapPin, Droplets, Filter } from 'lucide-react';
import Header from '@/components/Header';

const PropertyCard = ({ property }: any) => {
  const navigate = useNavigate();

  return (
    <Card className="h-full flex flex-col">
      <div className="bg-gray-200 h-[240px]"></div>
      <div className="p-6 space-y-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{property.name}</h3>
          <span className="text-green-600 font-semibold whitespace-nowrap">₹{property.price}/year</span>
        </div>
        
        <div className="flex items-center gap-1 text-gray-600">
          <MapPin size={16} />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Total Area</p>
            <p className="font-medium">{property.area} acres</p>
          </div>
          <div>
            <p className="text-gray-500">Lease Terms</p>
            <p className="font-medium">{property.leaseTerm}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Soil Type</p>
            <p className="font-medium">{property.soilType}</p>
          </div>
          <div className="flex items-start gap-1">
            <Droplets size={16} className="text-blue-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-500">Water Source</p>
              <p className="font-medium">{property.waterSource}</p>
            </div>
          </div>
        </div>
        
        <div className="flex-grow">
          <p className="text-sm text-gray-500">Available Facilities</p>
          <p className="font-medium text-sm">{property.facilities}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-2 border-t">
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
          className="w-full bg-green-500 hover:bg-green-600 mt-2" 
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
      location: "North Bangalore",
      area: "3.2",
      leaseTerm: "2 years minimum",
      soilType: "Black Cotton",
      waterSource: "Canal + Borewell",
      facilities: "Borewell, Storage Shed, Fencing",
      owner: "Priya Sharma",
      profession: "Software Engineer"
    },
    {
      id: 2,
      name: "Premium Farm Land",
      price: "32,000",
      location: "Mysore Rural",
      area: "5.0",
      leaseTerm: "3 years minimum",
      soilType: "Red Sandy Loam",
      waterSource: "River + Rainwater Harvesting",
      facilities: "Irrigation System, Worker Quarters",
      owner: "Rahul Verma",
      profession: "Business Owner"
    },
    {
      id: 3,
      name: "Organic Farming Plot",
      price: "18,000",
      location: "Hassan District",
      area: "2.5",
      leaseTerm: "1 year renewable",
      soilType: "Alluvial",
      waterSource: "Natural Spring + Pond",
      facilities: "Organic Certification, Composting Area",
      owner: "Lakshmi Devi",
      profession: "Retired Teacher"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Available Properties</h1>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search properties..." 
                className="pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 14L11.1 11.1" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorProperties;
