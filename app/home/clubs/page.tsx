"use client";

import api from '@/service/api';
import { useEffect, useState } from "react";

export default function ClubsPage() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/clubs") 
      .then((response) => {
        setClubs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Erro ao carregar os clubes.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Clubes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              {/* <th className="px-4 py-2 text-left">ID</th> */}
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">País</th>
              <th className="px-4 py-2 text-left">UF</th>
              <th className="px-4 py-2 text-left">Ano de Fundação</th>
              <th className="px-4 py-2 text-left">Jogadores</th>
            </tr>
          </thead>
          <tbody>
            {clubs.map((club) => (
              <tr key={club.id} className="border-b hover:bg-gray-50">
                {/* <td className="px-4 py-2">{club.id}</td> */}
                <td className="px-4 py-2">{club.name}</td>
                <td className="px-4 py-2">{club.country}</td>
                <td className="px-4 py-2">{club.uf}</td>
                <td className="px-4 py-2">{club.year_foundation}</td>
                <td className="px-4 py-2">{club.players}</td>
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
    api.get("/clubs") // Substitua por um endpoint real
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
 */