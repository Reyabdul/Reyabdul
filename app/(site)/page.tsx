"use client";

import React, { useEffect, useState } from "react";

//components
import Loading from "./components/Loading";

//pages
import Home from "./(pages)/home/pages";

//styles
import "../globals.css";

export default function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      <main className="main" id="main">
        {loading ? <Loading /> : <Home />}
      </main>
    </>
  );
}
