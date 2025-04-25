import { useState } from "react";
import githubLogo from "./assets/icon-logo-github.svg";
import iconSearch from "./assets/icon-lupa.svg";
import githubName from "./assets/icon-github.svg";

interface GitHubUser {
  name: string;
  avatar_url: string;
  bio: string;
}

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const fetchGitHubUser = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Buscando o usuário:", username); 

    if (!username) {
      setError("Digite um nome de usuário.");
      return;
    }
    setError("");
    setUserData(null);
    setIsLoading(true); 


  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("Usuário não encontrado");

    const data = await response.json();
    console.log(data);

    setUserData({
      name: data.name,
      avatar_url: data.avatar_url,
      bio: data.bio,
    });

  } catch (err) {
    setError("Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente.");
  } finally {
    setIsLoading(false);  
  }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-200 font-nunito">
      <div className="bg-black text-white w-[1156px] h-[537px] rounded-xl p-10 flex flex-col gap-10 shadow-xl">
        {/* Título e logo */}
        <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <img src={githubLogo} alt="GitHub Logo" className="w-14 h-14" />
              <h1 className="text-[60px] font-bold">Perfil</h1>
              <img src={githubName} alt="GitHub name" className="w-auto h-12" />
            </div>
        </div>

         {/* Campo de busca */}
         <form onSubmit={fetchGitHubUser} className="flex items-center justify-center mx-auto w-[503px] bg-white rounded overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Digite um usuário do GitHub"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 text-black text-lg focus:outline-none"
          />
          <button
           type="submit" 
           className="bg-blue-600 p-4" 
           disabled={isLoading}
          >
          {isLoading ? (
            <div className="w-6 h-6">Carregando!</div>
          ) : (      
          <img src={iconSearch} alt="Buscar" className="w-6 h-6" />
          )}
          </button>
        </form>

      {/* Exibição de dados ou erro */}
      {error && 
        <div className="bg-[#D9D9D9] w-[710px] h-[88px] mx-auto mt-6 flex items-center justify-center rounded-md">
          <p className="text-center text-lg text-red-500 font-medium">{error}</p>
      </div>
      }

      {isLoading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="w-16 h-16">Carregando...</div>
        </div>
      ) : (

      userData && (
         <div className="bg-[#D9D9D9] w-[804px] h-[257px] mx-auto px-10 mt-10 flex flex-row items-center justify-start rounded-xl gap-10">
            <img
              src={userData.avatar_url}
              alt={userData.name}
              className="w-32 h-32 rounded-full border-2 border-blue-500"
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-blue-500">{userData.name}</h2>
              <p className="text-lg mt-2 text-black">{userData.bio || "Este usuário não possui bio."}</p>
            </div>
          </div>
        )
      )}
      
      </div>
    </div>
  );
}

export default App;
