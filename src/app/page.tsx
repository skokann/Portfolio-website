import Navbar from "./components/navbar/Navbar";
import "../app/easter-egg.css";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutme/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import InviteCard from "./components/invite/Invite";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center px-2  pt-2">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <InviteCard />
      <Footer />
    </main>
  );
}
