"use client";

import { useState } from "react";
import ModeSelector from "@/components/ModeSelector";
import CasualPlay from "@/components/CasualPlay";
import TournamentPlay from "@/components/TournamentPlay";

export default function Home() {
  const [mode, setMode] = useState(null);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Warmachine Scenario Randomizer
        </h1>

        {!mode && <ModeSelector onSelect={setMode} />}
        {mode === "casual" && <CasualPlay onBack={() => setMode(null)} />}
        {mode === "tournament" && (
          <TournamentPlay onBack={() => setMode(null)} />
        )}
      </div>
    </main>
  );
}
