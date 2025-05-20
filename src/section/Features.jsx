import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faQuestionCircle,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Data fitur aplikasi
const features = [
  {
    id: 1,
    title: "Aturan",
    icon: faBookOpen,
    description:
      "Pelajari seluruh aturan lalu lintas untuk keselamatan berkendara.",
    link: "/Rules",
    linkText: "Lihat Aturan",
  },
  {
    id: 2,
    title: "Rambu Lalu Lintas",
    icon: faTrafficLight,
    description: "Kenali berbagai macam rambu-rambu di jalan raya.",
    link: "/TrafficSigns",
    linkText: "Pelajari Rambu",
  },
  {
    id: 3,
    title: "Quiz Interaktif",
    icon: faQuestionCircle,
    description: "Uji pengetahuanmu dengan soal kuis menarik.",
    link: "/Quiz",
    linkText: "Mulai Quiz",
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full py-16 bg-[#EFEEEA]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Fitur Utama Website
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          SiJala memudahkanmu memahami peraturan lalu lintas melalui fitur-fitur
          interaktif dan informatif.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border-2 border-green-200 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-green-200 rounded-full text-green-700">
                <FontAwesomeIcon icon={feature.icon} className="text-2xl" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-700 text-sm">
                {feature.description}
              </p>
              <Link
                to={feature.link}
                className="mt-4 inline-block text-green-700 font-medium hover:text-green-800 hover:underline"
              >
                {feature.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
