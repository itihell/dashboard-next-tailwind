import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";

interface PokemonsFavoriteState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsFavoriteState = {
  "1": { id: "1", name: "bulbasaur" },
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
