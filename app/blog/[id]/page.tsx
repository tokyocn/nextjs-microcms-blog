import React from "react";
import { client } from "@/libs/client";

async function getData(id: string) {
  const data = await client.get({
    endpoint: "blog",
    contentId: id,
  });
  return data;
}

async function page({ params }: { params: { id: string } }) {
  if (!params.id) return null;
  const blog = await getData(params.id);
  return (
    <main className="main">
      <h1 className="title">{blog.title}</h1>
      <p className="publishedAt">{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        className="post"
      ></div>
    </main>
  );
}

export default page;
