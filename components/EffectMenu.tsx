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
  // Use undefined instead of '' for no selection, aligning with the placeholder
  const [selectedEffect, setSelectedEffect] = useState<EffectOption | undefined>(undefined);

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg font-medium">Select Text Effect:</label>
      <Select value={selectedEffect} onValueChange={setSelectedEffect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an effect" />
        </SelectTrigger>
        <SelectContent>
          {/* Use a non-empty string like "none" for the "None" option */}
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