import { useMemo } from "react";
import { getHeroesByPublisher, IValidPublishers } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }: IValidPublishers) => {
  const heroes = useMemo(
    () => getHeroesByPublisher({ publisher }),
    [publisher]
  );

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
