"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      className="cursor-pointer px-2 py-2 transition hover:scale-120"
      onClick={() => setDark(!dark)}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
