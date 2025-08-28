'use client'; 

import { useState } from "react";
import MovieList from "./components/MovieList";
import { Footer } from "./sharedComponent/Footer";
import Navbar from "./sharedComponent/Navigation";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={() => {}}
      />
      <MovieList />
      <Footer />
    </div>
  );
}
