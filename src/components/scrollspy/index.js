import React, { useState, useEffect } from "react";
import "./style.css";
import { FaHome, FaBook, FaFolder, FaEnvelope, FaClock } from "react-icons/fa";

export const ScrollSpyNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "timeline", "publications", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (windowHeight + window.scrollY >= documentHeight - 100) {
        setActiveSection("contact");
        return;
      }

      // Check each section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          
          if (scrollPosition >= offsetTop - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "timeline", icon: <FaClock />, label: "Timeline" },
    { id: "publications", icon: <FaBook />, label: "Publications" },
    { id: "projects", icon: <FaFolder />, label: "Projects" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <nav className="scrollspy-nav">
      <ul className="scrollspy-list">
        {navItems.map((item) => (
          <li key={item.id} className="scrollspy-item">
            <button
              className={`scrollspy-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              title={item.label}
            >
              {item.icon}
            </button>
          </li>
        ))}
      </ul>
      <div className="scrollspy-indicator">
        <div
          className="scrollspy-indicator-line"
          style={{
            transform: `translateY(${
              navItems.findIndex((item) => item.id === activeSection) * 60
            }px)`,
          }}
        />
      </div>
    </nav>
  );
};

