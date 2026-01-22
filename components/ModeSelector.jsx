export default function ModeSelector({ onSelect }) {
  return (
    <div className="flex flex-col gap-3">
      <button
        className="bg-blue-600 text-white py-2 rounded-xl"
        onClick={() => onSelect("casual")}
      >
        Casual Play
      </button>

      <button
        className="bg-purple-600 text-white py-2 rounded-xl"
        onClick={() => onSelect("tournament")}
      >
        Tournament Play
      </button>
    </div>
  );
}
