
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, File, X } from 'lucide-react';
import ApplicationProgress from "@/components/ApplicationProgress";

const DocumentsUploadForm = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState<{ name: string; size: number }[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleNext = () => {
    navigate('/application/review');
  };

  const handleBack = () => {
    navigate('/application/financial-info');
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files).map(file => ({
        name: file.name,
        size: file.size
      }));
      
      setFiles([...files, ...newFiles]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: file.size
      }));
      
      setFiles([...files, ...newFiles]);
    }
  };
  
  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };
  
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center">Farm Land Application</h1>
        <ApplicationProgress currentStep={4} />
        
        <Card className="p-6">
          <h2 className="text-xl font-medium mb-6">Upload Documents</h2>
          
          <div className="space-y-4">
            <div 
              className={`border-2 border-dashed rounded-lg p-6 text-center ${
                isDragging ? 'border-green-500 bg-green-50' : 'border-gray-300'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Drag and drop your files here, or 
                <label className="text-green-600 hover:text-green-500 cursor-pointer ml-1">
                  browse
                  <input 
                    type="file" 
                    className="hidden" 
                    multiple 
                    onChange={handleFileChange}
                  />
                </label>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Supported formats: PDF, JPG, PNG (Max 5MB each)
              </p>
            </div>
            
            {files.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium text-gray-700 mb-2">Uploaded Files</h3>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                      <div className="flex items-center">
                        <File className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                        <span className="text-xs text-gray-500 ml-2">
                          {formatFileSize(file.size)}
                        </span>
                      </div>
                      <button 
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-4">
              <h3 className="font-medium text-gray-700 mb-2">Required Documents</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>ID Proof (Aadhar/PAN Card)</li>
                <li>Income Proof (ITR/Salary Slip)</li>
                <li>Bank Statement (Last 6 months)</li>
                <li>Farming Experience Certificate (if any)</li>
              </ul>
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
              disabled={files.length === 0}
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
