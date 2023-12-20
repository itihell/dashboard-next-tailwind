import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Favoritos",
  description: "Pokemons favoritos",
};



export default async function FavoritesPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pkemons favoritos <small className="text-blue-500">estático</small>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
