import React from "react";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

import "../../../../globals.css";
import "./project.css";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <section className="project fade-in-left">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="image-container">
          <img className="project-image" src={project.image} />
        </div>
        <div className="details-container">
          <h1>{project.name}</h1>

          <div className="blob-cont">
              <div className="yellow blob"></div>
              <div className="red blob"></div>
              <div className="orange blob"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
