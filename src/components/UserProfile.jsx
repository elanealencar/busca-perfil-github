export default function UserProfile({ user }) {
    return (
      <div className="bg-white p-4 rounded shadow text-center">
        <img src={user.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mx-auto" />
        <h2 className="text-xl mt-2">{user.name || "Sem nome"}</h2>
        <p className="text-lg text-gray-600">{userData.bio || "Este usuário não possui bio"}</p>
      </div>
    );
  }
  