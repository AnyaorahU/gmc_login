"use client";

import Link from "next/link";
import { useState } from "react";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Services", path: "/service" },
  { id: 4, name: "Contact", path: "/contact" },
];
export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex justify-between lg:px-100 p-4">
      {/* logo  */}
      <a href={"/"}>Samuel</a>
      {/* nav items  */}
      <nav className="space-x-4 hidden lg:flex">
        {navData.map((nav) => (
          // <a key={nav.id} href={nav.path}>{nav.name}</a>
          <Link key={nav.id} href={nav.path}>
            {nav.name}
          </Link>
        ))}
      </nav>
      <button onClick={shownav} className="block lg:hidden">
        menu
      </button>
      {/* mobile  */}
      {show && (
        <div className="absolute top-0 left-0 border border-white w-full bg-black h-screen flex flex-col gap-4 items-center py-10">
          {navData.map((nav) => (
            <Link key={nav.id} href={nav.path}>
              {nav.name}
            </Link>
          ))}

          <button onClick={() => setShow(false)}>close</button>
        </div>
      )}
      {/* if (condition) {} else if(){}
      es6 = (condition) ? statement1 : statement2 ? (condition) : statement3 */}
    </div>
  );
}
