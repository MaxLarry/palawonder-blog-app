
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="w-full px-6 py-6 flex justify-center">
          <Link href="/"><p className="medium font-extrabold">PalaWonder</p></Link>
        </div>
        {children}
        <footer className="mb-12 text-sm text-center opacity-50">
          <a
            href="#"
            className="hover:underline"
          >
             Legal Notice
          </a>{" "}
          · 
          <a
            href="#"
            className="hover:underline"
          >
             Privacy Policy
          </a>{" "}
          · 
          <a
            href="#"
            className="hover:underline"
          >
             Terms and Condition
          </a>
        </footer>
      </div>
    </>
  );
}
