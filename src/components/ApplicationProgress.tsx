
import React from 'react';
import { cn } from '@/lib/utils';

interface Step {
  number: number;
  label: string;
  active: boolean;
  completed: boolean;
}

const ApplicationProgress = ({ currentStep }: { currentStep: number }) => {
  const steps: Step[] = [
    { number: 1, label: 'Property Details', active: currentStep === 1, completed: currentStep > 1 },
    { number: 2, label: 'Farming Plan', active: currentStep === 2, completed: currentStep > 2 },
    { number: 3, label: 'Financial Info', active: currentStep === 3, completed: currentStep > 3 },
    { number: 4, label: 'Documents', active: currentStep === 4, completed: currentStep > 4 },
    { number: 5, label: 'Review', active: currentStep === 5, completed: currentStep > 5 },
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between relative">
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200">
          <div 
            className="h-full bg-green-500 transition-all duration-300"
            style={{ width: `${(currentStep - 1) * 25}%` }}
          />
        </div>
        {steps.map((step) => (
          <div 
            key={step.number}
            className="relative flex flex-col items-center"
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium z-10",
                step.completed ? "bg-green-500 text-white" :
                step.active ? "bg-green-500 text-white" :
                "bg-gray-200 text-gray-500"
              )}
            >
              {step.number}
            </div>
            <span className="mt-2 text-xs text-gray-600">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationProgress;
