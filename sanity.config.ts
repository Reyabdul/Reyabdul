// File that will define everthing in the sanity project

import { defineConfig } from "sanity"; 
import { structureTool } from "sanity/structure";

const config = defineConfig({
    projectId: "4lhd8m96",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2024-07-30", //use current date
    basePath: "/admin", //path where sanity studio will live
    plugins:[structureTool()] //need to use the sanity studio
});

export default config;