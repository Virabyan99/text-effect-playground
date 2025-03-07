// src/components/CodeEditorPanel.tsx
'use client';

import { useAppStore } from '@/lib/store';

export const CodeEditorPanel = () => {
  const { text } = useAppStore();

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-2">Effect Code Editor</h2>
      <pre className="flex-1 p-2 bg-gray-200 overflow-auto rounded-md">
        <code>
          {`// Example code for applying effect\nconst applyEffect = (text) => {\n  return text.split('').reverse().join('');\n};`}
        </code>
      </pre>
    </div>
  );
};