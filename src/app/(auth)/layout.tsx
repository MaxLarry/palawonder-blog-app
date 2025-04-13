
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
        <footer className="mb-12 text-sm text-center text-gray-400">
          <a
            href="https://tiptap.dev/legal-notice"
            className="text-gray-500 hover:underline"
          >
            Legal Notice
          </a>{" "}
          ·
          <a
            href="https://tiptap.dev/privacy"
            className="text-gray-500 hover:underline"
          >
            Privacy Policy
          </a>{" "}
          ·
          <a
            href="https://tiptap.dev/terms"
            className="text-gray-500 hover:underline"
          >
            Terms and Condition
          </a>
        </footer>
      </div>
    </>
  );
}
