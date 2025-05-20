import React from "react";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-[#EFEEEA] text-gray-700 pt-10 pb-6 border-t-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand & Deskripsi */}
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">SiJala</h3>
            <p className="text-sm max-w-xs leading-relaxed">
              Edukasi berkendara yang interaktif dan mudah dipahami, membentuk
              generasi pengendara yang tertib dan bertanggung jawab.
            </p>
          </div>

          {/* Navigasi */}
          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold mb-2">Menu</h4>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#home" className="hover:underline">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#reason" className="hover:underline">
                    Aturan
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:underline">
                    Rambu Lalu lintas
                  </a>
                </li>
                <li>
                  <a href="#goal" className="hover:underline">
                    Quiz
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Kontak</h4>
              <ul className="text-sm space-y-1">
                <li>
                  Email:{" "}
                  <a href="mailto:info@saferide.id" className="hover:underline">
                    info@SiJala.netlify.app
                  </a>
                </li>
                <li>WhatsApp: 089626161709</li>
              </ul>
            </div>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="font-semibold mb-2">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a
                // href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-700 transition"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                // href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-700 transition"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                // href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-700 transition"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-200 pt-4">
          © {new Date().getFullYear()} SafetyTraffic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
