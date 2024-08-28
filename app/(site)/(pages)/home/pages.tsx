import React from "react";
import PageLayout from "../layout";
import Link from "next/link";
import { UilArrowRight } from "@iconscout/react-unicons";
import { PortableText } from "next-sanity";
import { getHome } from "@/sanity/sanity-utils";

import Social from "../../components/Social/Social";

import "../../../globals.css";
import "./home.css";

export default async function Home() {
  const home = await getHome();

  return (
    <PageLayout>
      <section className="home centered" id="home">
        <div className="image-container fade-in-fwd ">
          {home.map((h, i) => (
            <div key={h._id} className="blob-cont">
              <div className="yellow blob"></div>
              <div className="red blob"></div>
              <div className="orange blob"></div>
              <img className="main-photo" key={i} src={h.image} />
            </div>
          ))}
        </div>
        <div className="bio-container">
          {home.map((h, i) => (
            <div key={h._id} className="content-container">
              <h2 key={h._id} className="section__title bio-title ">
                {h.headline}
              </h2>
              <h3 key={h._id} className="section__subtitle bio-subtitle ">
                {h.subHeadline}
              </h3>
              <div className="content fade-in-left">
                <PortableText key={h._id} value={h.content} />
                <Social />
              </div>

              {/* <Link className="contact-link" href="/contact">
                <p className="text">Say Hello</p>
                <UilArrowRight className="right-icon" size="30" color="#FFF" />
              </Link> */}

              <div className=" contact-link-container">
                <div className="blob-cont-two">
                  <div className="yellow-two blob"></div>
                  <div className="orange-two blob"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
