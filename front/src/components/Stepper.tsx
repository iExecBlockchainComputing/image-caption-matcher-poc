import React from 'react';
import { Check } from 'react-feather';
import { cn } from '@/utils/style.utils';

type StepperProps = {
  currentStep: number;
  steps: string[];
};

export const Stepper: React.FC<StepperProps> = ({ currentStep, steps }) => {
  const stepsNb = steps.length;

  return (
    <div
      className="grid place-items-center mx-auto gap-y-4"
      style={{
        gridTemplateColumns: `repeat(${stepsNb}, minmax(0, 1fr))`,
        maxWidth: stepsNb * 350,
      }}
      aria-label="Progress indicator"
    >
      {steps.map((step, index) => {
        const isActive = currentStep >= index;
        const isCompleted = currentStep > index;

        return (
          <div key={step} className="flex w-full flex-col items-center">
            <div className="relative w-full">
              {index < stepsNb - 1 && (
                <span
                  className={cn(
                    'absolute right-0 top-1/2 h-px w-1/2 -translate-y-1/2 translate-x-1/2 rounded-full',
                    isCompleted ? 'bg-white' : 'bg-grey-400'
                  )}
                />
              )}
              <div
                className={cn(
                  'mx-auto flex size-8 items-center justify-center rounded-full',
                  isActive ? 'bg-white text-black' : 'bg-grey-700'
                )}
                aria-label={`Step ${index + 1}`}
              >
                {isCompleted ? (
                  <Check size="16" strokeWidth="2.5" />
                ) : (
                  index + 1
                )}
              </div>
            </div>
            <span
              className={cn(
                'mt-2 text-center',
                isActive ? 'text-white' : 'text-grey-500'
              )}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};
