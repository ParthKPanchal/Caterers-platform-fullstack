"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function CaterersPage() {
  const [caterers, setCaterers] = useState([]);
  const [filteredCaterers, setFilteredCaterers] = useState([]);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    fetchCaterers();
  }, []);

  const fetchCaterers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/caterers");

      setCaterers(res.data);
      setFilteredCaterers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let filtered = caterers.filter((caterer) =>
      caterer.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (priceFilter) {
      filtered = filtered.filter(
        (caterer) => caterer.pricePerPlate <= Number(priceFilter),
      );
    }

    setFilteredCaterers(filtered);
  }, [search, priceFilter, caterers]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-red-500">
        Caterers Platform
      </h1>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search Caterer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
        />
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCaterers.map((caterer) => (
          <div
            key={caterer._id}
            className="bg-white/10 backdrop-blur-lg border border-white/20 hover:border-red-500 rounded-2xl p-6 hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-red-400">
              {caterer.name}
            </h2>

            <p className="mb-2">📍 {caterer.location}</p>

            <p className="mb-2">💰 ₹{caterer.pricePerPlate} / plate</p>

            <p className="mb-2">🍽 {caterer.cuisines.join(", ")}</p>

            <p>⭐ {caterer.rating}</p>
          </div>
        ))}
      </div>
      {filteredCaterers.length === 0 && (
        <p className="text-center text-gray-400 text-xl">No caterers found</p>
      )}
    </div>
  );
}
