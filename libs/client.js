import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "nextjs-blogs",
  apiKey: process.env.API_KEY,
});
