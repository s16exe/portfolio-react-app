import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className="h-25 flex justify-between items-center text-[18px]">
      <div className="w-[300px] flex justify-between items-center">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="h-10 col-span-1 font-semibold hover:text-[#e0e1dd]"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div></div> {/*  Placeholder for alignment if needed */}
      <div></div> {/* Placeholder for alignment if needed */}
    </nav>
  );
};

export default NavBar;
