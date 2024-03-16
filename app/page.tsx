import Link from "next/link";
import { client } from "../libs/client";

async function getData() {
  const data = await client.get({
    endpoint: "blog",
  });
  return data.contents;
}

export default async function Home() {
  const data = await getData();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();
  return (
    <main className="container">
      <h1>{time}</h1>
      <ul>
        {data.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
