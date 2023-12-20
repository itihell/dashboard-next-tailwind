"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";

export const FavoritePokemon = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );

  return <PokemonGrid pokemons={favoritePokemons} />;
};
