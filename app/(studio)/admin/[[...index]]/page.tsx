//refer: https://github.com/sanity-io/next-sanity
    // https://www.youtube.com/watch?v=OcTPaUfay5I (26min)

/***NOTE: Once completed, this will embed the sanity studio, to access by localhost:3000/admin ***/

"use client"; //tells next to render on client side, not server side



import { NextStudio } from 'next-sanity/studio';
import config from "@/sanity.config";

export default function AdminPage() {
  return <NextStudio config={config} />
}