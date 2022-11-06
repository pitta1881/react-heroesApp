import { SyntheticEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/userForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

const initialData = {
  searchText: "",
};

export const SearchPage = () => {
  const { formState, onInputChange, onResetForm } = useForm(initialData);
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q as string);

  const showSearch = q?.length === 0;
  const showError = q && q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    navigate(`?q=${formState.searchText.trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              value={formState.searchText}
              autoComplete="off"
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {showSearch && (
            <div className="alert alert-primary">Search a hero</div>
          )}
          {showError && (
            <div className="alert alert-danger">
              No hero with <b>{q}</b>
            </div>
          )}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};
