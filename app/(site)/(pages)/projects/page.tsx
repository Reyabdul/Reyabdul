import React from "react";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

import "../../../globals.css";
import "./projects.css";

export default async function Projects() {
  const projects = await getProjects();


  return (
    <section className="projects fade-in-left" id="projects">
      <h1>Under Construction</h1>

      {/* {projects.map((project, i) => {

        return (
          <div className="project-container">
            <Link
                href={`/project/${project.slug}`} 
                key={project._id}
            >
                <img 
                    className={(i % 2 === 0 ? 'image-square' : 'project-image')} 
                    src={project.image} 
                />
            </Link>
          </div>
        );
      })}



      <div className="project-info-container">
        
      {projects.map((project) => {
        return (
            <div className="project-info">
                <h2>{project.name}</h2>
                <p>{project._id}</p>
            </div>
            );
        })}
      </div> */}
    </section>
  );
}
