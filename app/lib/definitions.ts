
export type Club = {
  id: string;
  name: string;
  country: string;
  uf: string;
  players: [];
};

export type Player = {
  id: string;
  name: string;
  age: number;
  shirt_number: number;
  position: string;
  clubName: string;
};