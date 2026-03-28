import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import "./Header.css";

function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = {
    ru: [
      { to: "/transport", text: "Транспорт" },
      { to: "/seat-ads", text: "Подголовники и спинки" },
      { to: "/banners", text: "Баннерные растяжки" },
      { to: "/news", text: "Новости" },
      { to: "/analytics", text: "Аналитика" },
      { to: "/contacts", text: "Контакты" },
      { to: "/about", text: "О нас" },
      { to: "/prices", text: "Цены" },
    ],
    ua: [
      { to: "/transport", text: "Транспорт" },
      { to: "/seat-ads", text: "Підголівники та спинки" },
      { to: "/banners", text: "Банерні розтяжки" },
      { to: "/news", text: "Новини" },
      { to: "/analytics", text: "Аналітика" },
      { to: "/contacts", text: "Контакти" },
      { to: "/about", text: "Про нас" },
      { to: "/prices", text: "Ціни" },
    ]
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <NavLink to="/" className="logo">
            <span className="logo-main">25 ВЕК</span>
            <span className="logo-sub">
              {language === "ru"
                ? "Реклама на транспорте"
                : "Реклама на транспорті"}
            </span>
          </NavLink>
        </div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links[language].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div className="header-right">

          <div className="lang-switch">
            <button
              className={language === "ru" ? "active" : ""}
              onClick={() => setLanguage("ru")}
            >
              RU
            </button>
            <button
              className={language === "ua" ? "active" : ""}
              onClick={() => setLanguage("ua")}
            >
              UA
            </button>
          </div>

          <button className="menu-btn" onClick={toggleMenu}>
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;