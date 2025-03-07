"use client";
import { useAppStore } from "@/lib/store";
import { TextAreaPanel } from "@/components/TextAreaPanel";
import { CodeEditorPanel } from "@/components/CodeEditorPanel";
import { EffectMenu } from "@/components/EffectMenu";
import { MicroGlideEffect } from "@/components/MicroGlideEffect";

const HomePage = () => {
  return (
    <main className="flex min-h-screen w-screen overflow-hidden flex-col md:flex-row">
      {/* Left Panel: Text Area and Effect Display */}
      <section className="flex-1 bg-gray-100 p-4">
        <TextAreaPanel />
        <MicroGlideEffect />
      </section>

      {/* Right Panel: Code Editor and Effect Menu */}
      <section className="flex w-full md:w-1/3 flex-col bg-white p-4 border-l border-gray-300">
        <EffectMenu />
        <CodeEditorPanel />
      </section>
    </main>
  );
};

export default HomePage;