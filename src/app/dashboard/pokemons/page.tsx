import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Pokemons page",
};

const getPokemon = async (
  limit: number,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemon: SimplePokemon[] = data.results.map((result) => {
    return {
      id: result.url.split("/").at(-2)!,
      name: result.name,
    };
  });

  //throw new Error("A ocurrido un error insperado");

  return pokemon;
};

export default async function PokemonsPage() {
  const pokemon = await getPokemon(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small className="text-blue-500">estático</small>
      </span>

      <PokemonGrid pokemons={pokemon} />
    </div>
  );
}
