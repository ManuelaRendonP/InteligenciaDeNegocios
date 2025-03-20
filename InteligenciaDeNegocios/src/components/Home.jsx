import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-3xl font-bold">Bienvenido a la App</h1>
        <button 
          onClick={logout} 
          className="mt-4 bg-red-500 hover:bg-red-700 text-white p-2 rounded w-full font-bold transition duration-300">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Home;
