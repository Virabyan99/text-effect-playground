'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

// Define effect options as a const array to enable type inference
const effectOptions = ['Micro Glide Effect', 'Micro Text Weight Shift', 'Soft Focus Pulse'] as const;
// Create a type from the effectOptions array
type EffectOption = typeof effectOptions[number];

export const EffectMenu = () => {
  const [selectedEffect, setSelectedEffect] = useState<EffectOption | undefined>(undefined);

  // Custom handler to map "none" to undefined and cast other values to EffectOption
  const handleValueChange = (value: string) => {
    if (value === 'none') {
      setSelectedEffect(undefined);
    } else {
      setSelectedEffect(value as EffectOption); // Safe because SelectItems limit possible values
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium">Select Text Effect:</label>
      <Select
        value={selectedEffect ?? ''} // Use empty string when undefined to show placeholder
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an effect" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">None</SelectItem>
          {effectOptions.map((effect) => (
            <SelectItem key={effect} value={effect}>
              {effect}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};