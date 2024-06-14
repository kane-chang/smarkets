"use client";

import { GiBoxingGlove } from "react-icons/gi";
import { IoBasketballSharp } from "react-icons/io5";
import { FaChevronRight, FaHockeyPuck } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Boxing", href: "/boxing", icon: <GiBoxingGlove size={20} /> },
  {
    name: "Basketball",
    href: "/basketball",
    icon: <IoBasketballSharp size={20} />,
  },
  {
    name: "Ice Hockey",
    href: "/ice-hockey",
    icon: <FaHockeyPuck size={20} />,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);

  console.log(pathname === links[0].href);

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`link flex items-center hover:bg-[rgba(0,176,115,0.5)] transition px-5 py-2 justify-between  ${
              pathname === link.href ? "bg-grey-400" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              {link.icon}
              <p className="hidden md:block">{link.name}</p>
            </div>
            <FaChevronRight />
          </Link>
        );
      })}
    </>
  );
}
