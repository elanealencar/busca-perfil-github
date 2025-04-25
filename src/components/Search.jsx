import { useState } from "react";

export default function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Buscar usuário do GitHub"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Buscar
      </button>
    </form>
  );
}
