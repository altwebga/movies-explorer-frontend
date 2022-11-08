import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = () => {
  return (
    <section className="save-movies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
};

export default SavedMovies;
