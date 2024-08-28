import { PortableTextBlock } from "next-sanity";

export type Home = {
    _id: string;
    _createdAt: Date;
    title: string;
    headline: string;
    subHeadline: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}