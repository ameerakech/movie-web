'use client';
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Button from "../Button";
import React, { useState } from "react";
interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
}
export default function Navbar({ searchTerm, setSearchTerm, onSearch }: NavbarProps) {
  const pathname = usePathname();
  const [localSearch, setLocalSearch] = useState(searchTerm);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };
  const handleSearch = () => {
    setSearchTerm(localSearch);
    onSearch();
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <nav className="flex gap-10 mt-5 w-292 ml-34 mb-5 pt-5 relative">
      <div className="text-2xl text-black">
        M<span className="text-yellow-500">oo</span>vie
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="search"
          className="border-2 border-black w-150 rounded-xl pl-8 text-black"
          value={localSearch}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <CiSearch
          onClick={handleSearch}
          className="absolute top-1.5 left-2 text-gray-300 cursor-pointer"
        />
      </div>
      <ul className="flex gap-8">
        <li>
          <Link
            href="/"
            className={`cursor-pointer ${
              pathname === "/" ? "underline text-yellow-500" : "text-black"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/MyList"
            className={`cursor-pointer ${
              pathname === "/MyList" ? "underline text-yellow-500" : "text-black"
            }`}
          >
            My List
          </Link>
        </li>
        <li>
          <Link
            href="/Latest"
            className={`cursor-pointer ${
              pathname === "/Latest" ? "underline text-yellow-500" : "text-black"
            }`}
          >
            Latest
          </Link>
        </li>
        <Button
          buttonText={
            <li>
              <Link href="/signin">Sign in</Link>
            </li>
          }
          variant="secondary"
          onClickHandler={() => alert("Click was successful")}
        />
      </ul>
    </nav>
  );
}