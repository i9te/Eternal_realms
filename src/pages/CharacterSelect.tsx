import { useNavigate } from "react-router-dom";

const characters = [
  { id: "knight", name: "Knight" },
  { id: "mage", name: "Mage" },
  { id: "rogue", name: "Rogue" },
];

export default function CharacterSelect() {
  const navigate = useNavigate();

  const selectCharacter = (id: string) => {
    console.log("Selected:", id);
    navigate("/game");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Select Your Character</h1>
      <div className="flex gap-4">
        {characters.map((char) => (
          <button
            key={char.id}
            onClick={() => selectCharacter(char.id)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            {char.name}
          </button>
        ))}
      </div>
    </div>
  );
}
