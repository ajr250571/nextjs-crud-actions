"use client";

import { themeChange } from "theme-change";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">NextActionsCRUD</a>
      </div>
      <div className="flex-none gap-x-2 items-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="btn btn-outline btn-sm" href="/new">
              Crear Task
            </Link>
          </li>
        </ul>
        <select
          className="select select-secondary select-bordered border-double select-sm max-w-sm"
          data-choose-theme
        >
          <option value="black">Black</option>
          <option value="business">Business</option>
          <option value="corporate">Corporate</option>
          <option value="retro">Retro</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="wireframe">Wireframe</option>
        </select>
      </div>
    </div>
  );
}
