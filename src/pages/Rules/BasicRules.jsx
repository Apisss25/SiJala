import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faHelmetSafety,
  faCar,
  faTrafficLight,
  faLightbulb,
  faMobileAlt,
  faTachometerAlt,
  faBan,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";

const rules = [
  {
    icon: faIdCard,
    title: "SIM yang Sah",
    desc: "Semua pengemudi wajib memiliki SIM sesuai jenis kendaraan.",
  },
  {
    icon: faHelmetSafety,
    title: "Gunakan Helm",
    desc: "Wajib menggunakan helm standar SNI saat naik motor.",
  },
  {
    icon: faCar,
    title: "Sabuk Pengaman",
    desc: "Pengemudi dan penumpang depan wajib memakai sabuk pengaman.",
  },
  {
    icon: faTrafficLight,
    title: "Patuhi Lampu Lalu Lintas",
    desc: "Merah berhenti, kuning bersiap, hijau jalan.",
  },
  {
    icon: faLightbulb,
    title: "Hidupkan Lampu",
    desc: "Hidupkan lampu saat gelap atau hujan.",
  },
  {
    icon: faMobileAlt,
    title: "Jangan Main HP",
    desc: "Tidak menggunakan ponsel saat berkendara.",
  },
  {
    icon: faTachometerAlt,
    title: "Kecepatan Sesuai",
    desc: "Mengemudi sesuai batas kecepatan yang ditentukan.",
  },
  {
    icon: faBan,
    title: "Tidak Melawan Arus",
    desc: "Dilarang melawan arah lalu lintas.",
  },
  {
    icon: faWalking,
    title: "Prioritas Pejalan Kaki",
    desc: "Berikan prioritas pada pejalan kaki dan kendaraan darurat.",
  },
];

const BasicRules = () => (
  <section className="bg-[#EFEEEA] py-16">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Peraturan Umum
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Patuhi dasar-dasar aturan lalu lintas untuk keselamatan bersama.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rules.map((rule, idx) => (
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

export default BasicRules;
