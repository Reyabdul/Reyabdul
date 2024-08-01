"use client" //tells next to render on client side, not server side

//refer: https://github.com/sanity-io/next-sanity
    // https://www.youtube.com/watch?v=OcTPaUfay5I (26min)

import config from '../../../sanity.config';
import { NextStudio } from "next-sanity/studio";


export default function AdminPage() {
    return <NextStudio config={config}/>
}