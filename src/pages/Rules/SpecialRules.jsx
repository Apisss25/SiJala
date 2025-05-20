import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCocktail,
  faUsersSlash,
  faCheckCircle,
  faTools,
  faTriangleExclamation,
  faRoad,
  faArrowsAltH,
  faSignal,
  faBoxOpen,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";

const specialRules = [
  {
    icon: faCocktail,
    title: "Larangan Alkohol & Obat",
    desc: "Dilarang mengemudi di bawah pengaruh alkohol atau obat terlarang.",
  },
  {
    icon: faUsersSlash,
    title: "Kapasitas Kendaraan",
    desc: "Dilarang membawa penumpang/barang melebihi kapasitas kendaraan.",
  },
  {
    icon: faCheckCircle,
    title: "Uji Emisi & Laik Jalan",
    desc: "Kendaraan harus lulus uji emisi dan laik jalan terutama umum/niaga.",
  },
  {
    icon: faTools,
    title: "Perlengkapan Standar",
    desc: "Spion, lampu, klakson, rem, plat nomor wajib terpasang.",
  },
  {
    icon: faTriangleExclamation,
    title: "Larangan Parkir",
    desc: "Dilarang berhenti/parkir di tikungan, jembatan, jalur cepat.",
  },
  {
    icon: faRoad,
    title: "Jalur Sesuai",
    desc: "Gunakan jalur sesuai jenis kendaraan (motor dilarang tol).",
  },
  {
    icon: faArrowsAltH,
    title: "Menyalip dari Kanan",
    desc: "Dilarang menyalip dari sisi kiri kecuali di jalan satu arah.",
  },
  {
    icon: faSignal,
    title: "Gunakan Sein",
    desc: "Wajib menyalakan lampu sein saat belok atau pindah jalur.",
  },
  {
    icon: faBoxOpen,
    title: "Penutup Muatan",
    desc: "Kendaraan barang harus menutup muatan agar tidak berceceran.",
  },
  {
    icon: faAmbulance,
    title: "Pertolongan Kecelakaan",
    desc: "Wajib berhenti dan memberikan pertolongan, tidak boleh kabur.",
  },
];

const SpecialRules = () => (
  <section className="bg-[#EFEEEA] py-16">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Peraturan Khusus
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Patuhi aturan khusus untuk keselamatan dan kepatuhan lebih lanjut.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialRules.map((rule, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
              <FontAwesomeIcon
                icon={rule.icon}
                className="text-green-600 text-xl"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {rule.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{rule.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialRules;
