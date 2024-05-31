import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#2c2c2e] p-4 mb-4 rounded">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#ffffff] font-bold text-2xl">PeliPrime</div>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white hover:text-gray-400" to="/">Catálogo de Películas</Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-400" to="/add">Añadir Película</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
