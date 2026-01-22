import { useState } from "react";
import { SCENARIOS } from "@/lib/scenarios";

export default function TournamentPlay({ onBack }) {
  const [count, setCount] = useState(1);
  const [results, setResults] = useState([]);

  const roll = () => {
    const shuffled = [...SCENARIOS].sort(() => 0.5 - Math.random());
    setResults(shuffled.slice(0, Math.min(count, SCENARIOS.length)));
  };

  return (
    <div>
      <label className="block mb-1">Number of matches</label>
      <input
        type="number"
        min="1"
        max={SCENARIOS.length}
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="border rounded-xl w-full p-2 mb-3"
      />

      <button
        className="bg-purple-600 text-white py-2 w-full rounded-xl mb-4"
        onClick={roll}
      >
        Roll Scenario
      </button>

      <ul className="list-disc list-inside">
        {results.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <button
        className="text-sm text-gray-500 mt-4"
        onClick={onBack}
      >
        Back
      </button>
    </div>
  );
}
