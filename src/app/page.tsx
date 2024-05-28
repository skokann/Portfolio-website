import Navbar from "./components/navbar/Navbar";
import '../app/easter-egg.css';
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center px-10  pt-2">
      <Navbar />
       <Hero />
    </main>
  );
}
