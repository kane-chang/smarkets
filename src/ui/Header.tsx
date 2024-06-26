import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-grey-600 py-3 fixed top-0 left-0 right-0 z-50">
      <Link href={"/"}>
        <Image
          className="mx-5"
          src="https://smarkets.com/static/assets/smarkets-logo.33cf24e1279443342527.svg"
          alt="Smarkets logo"
          width={112}
          height={26}
          priority={true}
        />
      </Link>
    </div>
  );
}
