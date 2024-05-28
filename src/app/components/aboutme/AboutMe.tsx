// components/AboutMe.js

const AboutMe = () => {
  return (
    <div className="text-slate-100 h-auto justify-center w-full flex flex-col max-w-7xl my-28 gap-3 px-4">
      <div className="flex text-xl font-bold mb-5 gap-5">
        <p className="text-4xl text-[#B388FF]">01.</p>
        <h1 className="text-4xl">O mně</h1>
      </div>
      <div className="lg:flex justify-between lg:gap-40">
        <div className="flex-1">
          <p className="text-lg">
            Jsem tvůrce webových stránek i aplikací, programátor z Kadaně.
            Věnuji se správě serverů a tvořím webové stránky, dále také programuji
            a spravuji počítačové sítě.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="py-5 lg:py-0 lg:pb-4 font-bold text-xl">Některé technologie, se kterými pracuji:</h2>
          <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-wrap">
            <ul className="space-y-2 lg:flex-1 ">
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105 ">
                <span className="text-[#B388FF] mr-2 ">•</span> TypeScript
              </li>
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
                <span className="text-[#B388FF] mr-2">•</span> HTML5 &amp; CSS3
              </li>
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
                <span className="text-[#B388FF] mr-2">•</span> NextJS
              </li>
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
                <span className="text-[#B388FF] mr-2">•</span> JavaScript
              </li>
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
                <span className="text-[#B388FF] mr-2">•</span> TailwindCSS
              </li>
            </ul>
            <ul className="space-y-2 lg:flex-1">
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
                <span className="text-[#B388FF] mr-2">•</span> WordPress
              </li>
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
                <span className="text-[#B388FF] mr-2">•</span> Bootstrap
              </li>
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
                <span className="text-[#B388FF] mr-2">•</span> Figma
              </li>
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
                <span className="text-[#B388FF] mr-2">•</span> Sanity.io
              </li>
              <li className="flex items-center transform transition-transform duration-200 hover:scale-105">
                <span className="text-[#B388FF] mr-2">•</span> Vercel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
