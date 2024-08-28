//all functions used to grab data

import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";
import { Project } from "@/types/Project";
import { Home } from "@/types/Home";


//will display project array on all pages
export async function getProjects(): Promise<Project[]> {
  //use API call and GROQ query to pull data from project section
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            alt,
            url,
            github,
            figma,
            content
          }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            url,
            github,
            figma,
            content
          }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}

export async function getHome(): Promise<Home[]> {
  //use API call and GROQ query to pull data from project section
  return createClient(clientConfig).fetch(
    groq`*[_type == "home"]{
            _id,
            _createdAt,
            name,
            headline,
            subHeadline,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
          }`
  );
}