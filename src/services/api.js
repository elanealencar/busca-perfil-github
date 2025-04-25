export const fetchGitHubUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente");
    }
    return response.json();
  };
  