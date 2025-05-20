import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import images
import RambuDilarangBerhenti from "../assets/RambuDilarangBerhenti.jpg";
import LampuMerah from "../assets/LampuMerah.jpg";
import BanyakAnakKecil from "../assets/RambuHatiHatiBanyakAnakKecil.jpg";
import HatiHatiJurang from "../assets/RambuHatiHatiJurang.jpg";
import JalanLicin from "../assets/RambuJalanLicin.jpg";
import JalanLubang from "../assets/RambuJalanLubang.jpg";
import Rem from "../assets/RambuRem.jpg";
import Stop from "../assets/RambuStop.jpg";
import TandaSeru from "../assets/RambuTandaSeru.jpg";
import ZebraCross from "../assets/RambuZebraCross.jpg";

// Data rambu
const signs = [
  { id: 1, title: "Dilarang Berhenti", img: RambuDilarangBerhenti },
  { id: 2, title: "Lampu Merah", img: LampuMerah },
  { id: 3, title: "Banyak Anak Kecil", img: BanyakAnakKecil },
  { id: 4, title: "Hati-hati Jurang", img: HatiHatiJurang },
  { id: 5, title: "Jalan Licin", img: JalanLicin },
  { id: 6, title: "Jalan Bergelombang", img: JalanLubang },
  { id: 7, title: "Gunakan Rem", img: Rem },
  { id: 8, title: "Stop", img: Stop },
  { id: 9, title: "Hati-Hati", img: TandaSeru },
  { id: 10, title: "Zebra Cross", img: ZebraCross },
];

const TrafficSigns = () => {
  const [search, setSearch] = useState("");

  // Filtered signs based on search
  const filtered = signs.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-[#EFEEEA] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Rambu Lalu Lintas
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Kenali tanda-tanda penting di jalan untuk keselamatan bersama.
        </p>

        {/* Search Input */}
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Cari rambu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Grid of signs */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((sign) => (
            <div
              key={sign.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={sign.img}
                alt={sign.title}
                className="w-full h-40 object-contain bg-gray-100"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {sign.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrafficSigns;
