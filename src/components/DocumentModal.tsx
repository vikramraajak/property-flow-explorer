
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, RefreshCw } from 'lucide-react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'land' | 'soil' | 'water';
}

const DocumentModal: React.FC<DocumentModalProps> = ({ isOpen, onClose, title, type }) => {
  // Different fields based on document type
  const renderFields = () => {
    switch (type) {
      case 'land':
        return (
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Registration No</p>
              <p className="font-medium">R-2023-BLR-8976</p>
            </div>
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Survey No</p>
              <p className="font-medium">S-456-78/2</p>
            </div>
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Land Area</p>
              <p className="font-medium">3.2 acres</p>
            </div>
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Boundaries</p>
              <p className="font-medium">North: Highway, South: River</p>
            </div>
          </div>
        );
      case 'soil':
        return (
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">pH</p>
              <p className="font-medium">6.8 (Neutral)</p>
            </div>
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Organic Matter</p>
              <p className="font-medium">2.4%</p>
            </div>
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Nutrients</p>
              <p className="font-medium">N:P:K - 14:10:12</p>
            </div>
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Test Date</p>
              <p className="font-medium">January 15, 2024</p>
            </div>
          </div>
        );
      case 'water':
        return (
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Source Type</p>
              <p className="font-medium">Canal + Borewell</p>
            </div>
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Capacity</p>
              <p className="font-medium">14,000 liters/day</p>
            </div>
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Validity</p>
              <p className="font-medium">2025-12-31</p>
            </div>
            <div className="border p-3 rounded-md">
              <p className="text-sm text-gray-500">Permission No</p>
              <p className="font-medium">WP-2023-45678</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {title}
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <CheckCircle size={12} />
              Verified
            </span>
          </DialogTitle>
          <DialogDescription>
            This document has been verified by the respective department.
          </DialogDescription>
        </DialogHeader>
        
        {renderFields()}
        
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCw size={16} />
            Request Re-verification
          </Button>
          <Button className="flex items-center gap-2 bg-green-500 hover:bg-green-600">
            <Download size={16} />
            Download Document
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentModal;
