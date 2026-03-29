import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext"; 
import "./Sidebar.css";

function Sidebar() {
  const { language } = useContext(LanguageContext);

  const links = {
    ru: [
      { to: "/seat-ads", text: "Подголовники и спинки" },
      { to: "/banners", text: "Баннерные растяжки" },
      { to: "/transport", text: "Реклама на транспорте" },
      { to: "/gallery", text: "Фотогалерея" },
      { to: "/patents", text: "Патенты" },
      { to: "/ceiling", text: "Реклама на потолках" },
      { to: "/doors", text: "Наклейки на дверях" },
    ],
    ua: [
      { to: "/seat-ads", text: "Підголівники та спинки" },
      { to: "/banners", text: "Банерні розтяжки" },
      { to: "/transport", text: "Реклама на транспорті" },
      { to: "/gallery", text: "Фотогалерея" },
      { to: "/patents", text: "Патенти" },
      { to: "/ceiling", text: "Реклама на стелі" },
      { to: "/doors", text: "Наклейки на дверях" },
    ]
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {links[language].map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;