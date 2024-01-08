"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { useEffect, useState } from "react";

export const FavoritePokemon = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  // const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return <PokemonGrid pokemons={favoritePokemons} />;
};
