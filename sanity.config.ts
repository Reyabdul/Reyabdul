//This file will define everthing in the sanity project

import { defineConfig } from "sanity"; 
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas"


const config = defineConfig({
    projectId: "4lhd8m96",
    dataset: "production",
    title: "Personal Website",
    apiVersion: "2024-08-02", //use current date
    basePath: "/admin", //path where sanity studio will live
    plugins:[structureTool()], //need to use the sanity studio
    schema: { types: schemas }
    // useCdn: true //ref: https://www.sanity.io/help/js-client-cdn-configuration

});

export default config;