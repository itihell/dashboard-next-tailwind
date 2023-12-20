import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface PokemonsFavoriteState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsFavoriteState = {
  "1": { id: "1", name: "bulbasaur" },
  "7": { id: "7", name: "squirtle" },
  "4": { id: "4", name: "charmander" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state[id]) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
