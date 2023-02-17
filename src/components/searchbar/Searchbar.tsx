import React, { useState } from "react";
import { useRouter } from "next/router";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
  ];
  const handleChange = (e: any) => {
    return "må lages funksjon her";
  };

  return (
    <div className="absolute left-[8rem] top-[27rem] flex w-[40rem] flex-row gap-4 rounded-lg bg-white p-5 text-lg text-stone-900 shadow-md">
      <input
        className="w-full "
        type="text"
        placeholder="Hvilke verktøy ser du etter?"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

export default Searchbar;
