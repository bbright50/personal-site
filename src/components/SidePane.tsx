import BenjiHeadshot from "../assets/benji-headshot.jpg";

export default function SidePane() {
  return (
    <div className="flex flex-col min-h-screen justify-evenly bg-gradient-to-b from-yellow-50 to-yellow-300 text-black font-Roboto font-bold md:w-[400px]">
      <img
        src={BenjiHeadshot}
        alt="A Picture of Benji"
        className="h-[250px] aspect-auto mx-auto pt-4 md:pt-8 "
      />
      <div className="mb-20">
        <div className="pb-2 pt-4 text-xl md:text-2xl pl-8 md:pl-10">
          <h3>Some Info</h3>
        </div>
        <div className="px-8 md:px-16 pt-2 pb-8 flex flex-col space-y-1.5 font-normal">
          <p>Vineyard, Utah</p>
          <p>Position: Junior Software Developer</p>
          <a
            href="https://github.com/bbright50"
            className="hover:text-red-500/80 w-fit"
          >
            Github: @bbright50
          </a>
          <p>benjamin.bright50 AT Gmail DOT com</p>
        </div>
        <div className=" ml-8 flex flex-col">
          <div className="text-xl md:text-2xl">
            <h1>Skills</h1>
          </div>
          <div className="pt-2">
            <div className="flex flex-wrap text-white gap-2">
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">HTML5</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">CSS3</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">JavaScript</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">
                Tailwind CSS
              </p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">React</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">
                React Router
              </p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">TypeScript</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">Phython</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">Git</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">
                Web Deployment
              </p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">Rest API</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">Figma</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">
                Responsive UI
              </p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">Agile</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">
                Responsive UI
              </p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">
                Front-end Design
              </p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">Vite</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">ShadCN UI</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">Vercel</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">Salesforce</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">CI/CD</p>
              <p className="bg-red-500/70 px-3 py-1 rounded-2xl">Linear</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
