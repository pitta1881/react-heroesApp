import { IHero } from "./IHero";
import { heroes } from "./../data/heroes";

export const getHeroesById = (id: string): IHero | undefined => {
  return heroes.find((heroe) => heroe.id === id);
};
