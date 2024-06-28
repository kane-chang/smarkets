"use client";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/lib/categories";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`link flex items-center hover:bg-[rgba(0,176,115,0.5)] transition px-5 py-2 justify-between  ${
              `/${pathname.split('/')[1]}` === link.href ? "bg-grey-400" : ""
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
