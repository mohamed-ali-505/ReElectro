import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@/lib/utils'; // Adjust or remove this if `cn` is not defined in your project.
import React from 'react';

export const RadioGroup = RadioGroupPrimitive.Root;

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'w-4 h-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none',
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="w-2 h-2 bg-blue-500 rounded-full" />
  </RadioGroupPrimitive.Item>
));

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;