import Footer from "../components/footer";
import Header from "../components/header";
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
