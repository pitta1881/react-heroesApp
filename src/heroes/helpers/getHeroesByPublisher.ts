import { IHero } from "./IHero";
import { heroes } from "./../data/heroes";

export interface IValidPublishers {
  publisher: "DC Comics" | "Marvel Comics";
}

export const getHeroesByPublisher = ({
  publisher,
}: IValidPublishers): IHero[] => {
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
