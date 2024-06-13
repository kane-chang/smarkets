import { IoMdCalendar } from "react-icons/io";
import React from "react";
import Link from "next/link";

export default function MarketCard({ market }) {
  return (
    <div className="py-5">
    <details className="group">
      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
        <span>{market.name}</span>
        <span className="transition group-open:rotate-180">
          <svg
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
        SAAS platform is a cloud-based software service that allows users
        to access and use a variety of tools and functionality.
      </p>
    </details>
  </div>
  );
}
