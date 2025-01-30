"use client";

import api from '@/service/api';
import { useEffect, useState } from "react";

export default function PlayersPage() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/players") // Substitua por um endpoint real
      .then((response) => {
        setPlayers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Erro ao carregar os jogadores.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Jogadores</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              {/* <th className="px-4 py-2 text-left">ID</th> */}
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Posição</th>
              <th className="px-4 py-2 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id} className="border-b hover:bg-gray-50">
                {/* <td className="px-4 py-2">{player.id}</td> */}
                <td className="px-4 py-2">{player.name}</td>
                <td className="px-4 py-2">{player.position}</td>
                <td className="px-4 py-2">{player.clubName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



/* "use client";

import api from '@/service/api';
import { useEffect, useState } from "react";


export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/players") // Substitua por um endpoint real
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
 */

