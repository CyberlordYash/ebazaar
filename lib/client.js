import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "7es68p5q",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
