//all functions used to grab data

import { createClient, groq } from "next-sanity";

export async function getProjects() {

    const client =  createClient({
        projectId: "4lhd8m96",
        dataset: "production",
        apiVersion: "2024-07-30",
    });


    //use API call and GROQ query to pull data from project section
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}