"use client";
import { useAppStore } from "@/lib/store";
import { useState } from "react";

export const CodeEditorPanel = () => {
  const { effectCode, setEffectCode } = useAppStore();
  const [localEffectCode, setLocalEffectCode] = useState(effectCode);

  const handleBlur = () => {
    try {
      JSON.parse(localEffectCode);
      setEffectCode(localEffectCode);
    } catch (error) {
      console.error("Invalid JSON:", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-2">Effect Code Editor</h2>
      <textarea
        className="flex-1 p-2 bg-gray-200 border rounded-md resize-none overflow-auto focus:outline-none"
        value={localEffectCode}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // Prevent newline in JSON
          }
        }}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          const newValue = e.target.value.replace(/[\n\r]/g, '');
          setLocalEffectCode(newValue);
        }}
        onPaste={(e) => {
          const text = e.clipboardData.getData('text');
          e.preventDefault();
          setLocalEffectCode(prev => prev + text.replace(/[\n\r]/g, ''));
        }}
        onDrop={(e) => {
          e.preventDefault();
          const text = e.dataTransfer.getData('text');
          setLocalEffectCode(prev => prev + text.replace(/[\n\r]/g, ''));
        }}
        onDragOver={(e) => e.preventDefault()}
      />
    </div>
  );
};