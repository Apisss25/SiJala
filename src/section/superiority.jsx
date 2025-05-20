import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faBook,
  faGamepad,
  faMobileAlt,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import ImageSuperiority from "../assets/Superiority.png";

// Daftar keunggulan situs
const advantages = [
  {
    id: 1,
    icon: faLightbulb,
    title: "Pembelajaran Interaktif",
    description:
      "Materi disajikan dengan kuis interaktif untuk meningkatkan pemahaman.",
  },
  {
    id: 2,
    icon: faBook,
    title: "Panduan Lengkap",
    description:
      "Aturan lalu lintas disusun lengkap dan terstruktur untuk semua pengguna.",
  },
  {
    id: 3,
    icon: faGamepad,
    title: "Kuis Tentang Lalu lintas",
    description:
      "Uji pengetahuanmu tentang rambu dan aturan lalu lintas melalui kuis interaktif yang menyenangkan.",
  },
  {
    id: 4,
    icon: faMobileAlt,
    title: "Responsif",
    description:
      "Desain mobile-friendly sehingga dapat diakses di perangkat apa saja.",
  },
  {
    id: 5,
    icon: faGlobe,
    title: "Akses Online",
    description:
      "Dapat diakses kapan saja dan di mana saja selama terhubung internet.",
  },
  {
    id: 6,
    icon: faUsers,
    title: "User Friendly",
    description: "UI yang sederhana dan mudah digunakan oleh semua usia.",
  },
];

const Superiority = () => (
  <section className="w-full py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Keunggulan SiJala
      </h2>
      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
        Berikut adalah beberapa keunggulan yang membuat SiJala menjadi platform
        edukasi lalu lintas pilihan.
      </p>

      <div className="mt-12 flex flex-col lg:flex-row items-start gap-12">
        {/* Gambar di kiri */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={ImageSuperiority}
            alt="Keunggulan SiJala"
            className="w-full max-w-sm object-contain"
          />
        </div>

        {/* List keunggulan di kanan */}
        <div className="w-full lg:w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {advantages.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-green-600 text-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Superiority;
