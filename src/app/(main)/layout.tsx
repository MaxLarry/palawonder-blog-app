import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { Provider } from "../provider";




export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header/>
      {children}
      <Footer />
    </>
  );
}
