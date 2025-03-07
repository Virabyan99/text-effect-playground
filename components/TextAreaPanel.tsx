// src/components/TextAreaPanel.tsx
'use client';

import { useAppStore } from '@/lib/store';

export const TextAreaPanel = () => {
  const { text, setText } = useAppStore();

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-2">Text Input</h2>
      <textarea
        className="flex-1 p-2 border rounded-md resize-none focus:outline-none"
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};