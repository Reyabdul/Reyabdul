import React from "react";
import PageLayout from "../layout";

import "../../../globals.css";
import "./home.css";

export default function Home() {
  return (
    <PageLayout>
      <section className="home section centered" id="home">
        <div className="image-container">
          <h1>Photo section</h1>
        </div>
        <div className="bio-container">
          <h1>Bio Section</h1>
        </div>
      </section>
    </PageLayout>
  );
}
