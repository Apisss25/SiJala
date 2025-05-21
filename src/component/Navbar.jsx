import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import {
  faChevronDown,
  faChevronUp,
  faCar,
  faMotorcycle,
  faGavel,
  faGamepad,
  faLightbulb,
  faHome,
  faBars,
  faX,
  faTrafficLight,
  faQuestionCircle,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  // State untuk desktop
  const [desktopGameOpen, setDesktopGameOpen] = useState(false);
  const [desktopRulesOpen, setDesktopRulesOpen] = useState(false);

  // State untuk mobile
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileGameOpen, setMobileGameOpen] = useState(false);
  const [mobileRulesOpen, setMobileRulesOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  // Refs untuk klik di luar
  const menuRef = useRef(null);
  const gameRef = useRef(null);
  const rulesRef = useRef(null);

  // ListDropdown menyatukan logika desktop + mobile
  const ListDropdown = [
    {
      category: "Aturan",
      // Desktop
      refDesktop: rulesRef,
      toggleDesktop: () => {
        setDesktopRulesOpen((prev) => !prev);
        setDesktopGameOpen(false);
      },
      isDesktopOpen: desktopRulesOpen,
      desktopIcon: desktopRulesOpen ? faChevronUp : faChevronDown,
      // Mobile
      toggleMobile: () => setMobileRulesOpen((prev) => !prev),
      isMobileOpen: mobileRulesOpen,
      mobileIcon: mobileRulesOpen ? faChevronUp : faChevronDown,
      // Item list
      items: [
        { id: 1, title: "Aturan Umum", icon: faCar, url: "/BasicRules" },
        {
          id: 2,
          title: "Aturan Khusus",
          icon: faMotorcycle,
          url: "/SpecialRules",
        },
      ],
      mobileIconPrefix: faGavel,
    },
  ];

  // Tutup semua menu
  const closeAll = () => {
    setMenuOpen(false);
    setMobileGameOpen(false);
    setMobileRulesOpen(false);
    setDesktopGameOpen(false);
    setDesktopRulesOpen(false);
  };

  // Klik di luar untuk desktop & mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop
      if (gameRef.current && !gameRef.current.contains(event.target)) {
        setDesktopGameOpen(false);
      }
      if (rulesRef.current && !rulesRef.current.contains(event.target)) {
        setDesktopRulesOpen(false);
      }
      // Mobile
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 px-7 py-4 z-50 flex justify-between items-center transition-colors duration-300 ${
          scrolled ? "bg-gray-100 shadow-md" : "bg-transparent"
        }`}
      >
        <h1 className="text-[18px] font-bold font-[poppins] text-black">
          <Link to="/" className="cursor-pointer">
            SiJala
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black font-[poppins] font-medium text-[16px] items-center">
          <li className="cursor-pointer">
            <Link to="/" className="hover:underline">
              Beranda
            </Link>
          </li>

          {ListDropdown.map((data) => (
            <li
              key={data.category}
              ref={data.refDesktop}
              className="relative cursor-pointer"
            >
              <button
                onClick={data.toggleDesktop}
                className="flex items-center gap-1"
              >
                {data.category}
                <FontAwesomeIcon
                  icon={data.desktopIcon}
                  className="text-[14px] ml-1"
                />
              </button>

              {data.isDesktopOpen && (
                <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-md rounded-md p-2 min-w-[120px]">
                  {data.items.map((item) => (
                    <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
                      <Link
                        to={item.url}
                        onClick={() =>
                          setDesktopGameOpen(false) & setDesktopRulesOpen(false)
                        }
                        className="flex items-center gap-2"
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="text-black"
                        />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link to="/TrafficSigns" onClick={closeAll}>
              Rambu Lalu Lintas
            </Link>
          </li>
          <li>
            <Link to="/Quiz" onClick={closeAll}>
              Quiz
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-black text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-[70%] h-screen bg-gray-100 shadow-md border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FontAwesomeIcon
            icon={faX}
            className="text-black text-2xl cursor-pointer"
            onClick={closeAll}
          />
        </div>

        <ul className="px-6 space-y-6 font-[poppins] text-[18px] text-black">
          <li>
            <Link to="/" onClick={closeAll} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>

          {ListDropdown.map((data) => (
            <li key={data.category} className="">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={data.toggleMobile}
              >
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={data.mobileIconPrefix} />{" "}
                  {data.category}
                </div>
                <FontAwesomeIcon icon={data.mobileIcon} />
              </div>

              {data.isMobileOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  {data.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.url}
                        onClick={closeAll}
                        className="flex items-center gap-2"
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="text-black"
                        />{" "}
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/TrafficSigns"
              onClick={closeAll}
              className="flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faTrafficLight} className="text-xl" />
              Rambu Lalu Lintas
            </Link>
          </li>
          <li>
            <Link
              to="/Quiz"
              onClick={closeAll}
              className="flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faClipboardList} className="text-xl" />
              Quiz
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
