import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("why am I here");
  return (
    <>
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <Hello/>
    </>
  );
}
