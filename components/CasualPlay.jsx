import { useState } from "react";
import { SCENARIOS } from "@/lib/scenarios";

export default function CasualPlay({ onBack }) {
  const roll = () =>
    SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];

  const [scenario, setScenario] = useState(roll());

  return (
    <div className="text-center">
      <p className="text-lg mb-2">Scenario:</p>
      <p className="text-xl font-bold mb-4">{scenario}</p>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-xl mr-2"
        onClick={() => setScenario(roll())}
      >
        Roll Again
      </button>

      <button className="text-sm text-gray-500" onClick={onBack}>
        Back
      </button>
    </div>
  );
}
