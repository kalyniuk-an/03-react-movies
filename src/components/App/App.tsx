import css from "./App.module.css";
import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async () => { 
    try {
      setIsLoading(true);
      setIsError(false);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className={css.app}>
      {/* <SearchBar onSearch={() => { }}></SearchBar> */}
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  )
}