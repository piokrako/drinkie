import { Ingredients } from "./ingridients.interface";

export interface Drink {
  id: string; // idDrink
  name: string; // strDrink
  category: string; // strCategory"
  alcoholic: string; // strAlcoholic
  glass: string; // strGlass
  instructions: string; // strInstructions
  thumb: string; // strDrinkThumb
  ingridients: Array<Ingredients>; // table of strIngredient1, strMeasure1 - strIngredient15, strMeasure15; Ingredients consist of key(Ingredient) ang value (mesure)
}
