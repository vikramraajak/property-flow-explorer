
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, File, X } from 'lucide-react';
import { toast } from "sonner";
import ApplicationProgress from "@/components/ApplicationProgress";

interface DocumentFile {
  type: 'idProof' | 'incomeProof' | 'bankStatement' | 'farmingCertificate';
  file: { name: string; size: number };
}

const DocumentsUploadForm = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<{ [key: string]: DocumentFile | null }>({
    idProof: null,
    incomeProof: null,
    bankStatement: null,
    farmingCertificate: null
  });

  const handleNext = () => {
    const requiredDocs = ['idProof', 'incomeProof', 'bankStatement'];
    const missingDocs = requiredDocs.filter(doc => !documents[doc]);

    if (missingDocs.length > 0) {
      toast.error("Please upload all required documents");
      return;
    }
    
    navigate('/application/review');
  };

  const handleBack = () => {
    navigate('/application/financial-info');
  };

  const handleFileUpload = (type: DocumentFile['type'], file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB");
      return;
    }

    setDocuments(prev => ({
      ...prev,
      [type]: {
        type,
        file: { name: file.name, size: file.size }
      }
    }));
  };

  const removeFile = (type: DocumentFile['type']) => {
    setDocuments(prev => ({
      ...prev,
      [type]: null
    }));
  };

  const DocumentUploadTile = ({ 
    type, 
    title, 
    description, 
    required = true 
  }: { 
    type: DocumentFile['type']; 
    title: string; 
    description: string; 
    required?: boolean; 
  }) => (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="text-lg font-medium mb-2">
        {title} {required && <span className="text-red-500">*</span>}
      </h3>
      
      {documents[type] ? (
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
          <div className="flex items-center">
            <File className="h-4 w-4 text-gray-500 mr-2" />
            <span className="text-sm truncate max-w-[200px]">{documents[type]?.file.name}</span>
            <span className="text-xs text-gray-500 ml-2">
              {(documents[type]?.file.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
          <button 
            onClick={() => removeFile(type)}
            className="text-gray-500 hover:text-red-500"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-green-500 transition-colors"
             onClick={() => document.getElementById(type)?.click()}
        >
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600">{description}</p>
          <input
            id={type}
            type="file"
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleFileUpload(type, e.target.files[0]);
              }
            }}
          />
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Farm Land Application</h1>
        <ApplicationProgress currentStep={4} />
        
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-6">Upload Documents</h2>
          
          <DocumentUploadTile
            type="idProof"
            title="ID Proof"
            description="Upload Aadhaar/PAN Card (PDF or image file)"
          />
          
          <DocumentUploadTile
            type="incomeProof"
            title="Income Proof"
            description="Upload ITR/Salary Slip (PDF or image file)"
          />
          
          <DocumentUploadTile
            type="bankStatement"
            title="Bank Statement"
            description="Upload last 6 months statement (PDF file only)"
          />
          
          <DocumentUploadTile
            type="farmingCertificate"
            title="Farming Experience Certificate"
            description="Upload if available (Optional)"
            required={false}
          />
          
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

export default DocumentsUploadForm;
