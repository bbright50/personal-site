import RepoCard from "@/components/RepoCard";
import GoLangLogo from "../assets/GoLangLogo.png";
import AngularLogo from "../assets/AngularLogo.png";
import PythonLogo from "../assets/PythonLogo.webp";
import ReactLogo from "../assets/ReactLogo.png";
import JavaScriptLogo from "../assets/JavaScriptLogo.png";
import ExpressJSLogo from "../assets/expressjsLogo.png";

const repoArray = [
  {
    name: "Tour of Heroes",
    logo: `${AngularLogo}`,
    link: "https://github.com/bbright50/angular-tour-of-heroes",
    desc: "Worked through the Tour of Heroes tutorial to better learn Angular.",
    key: 0,
  },
  {
    name: "Maze Solver",
    logo: `${PythonLogo}`,
    link: "https://github.com/bbright50/maze-solver",
    desc: "A fun random maze generator that solves itself.",
    key: 1,
  },
  {
    name: "My Personal Website",
    logo: `${ReactLogo}`,
    link: "https://github.com/bbright50/personal-site",
    desc: "My personal website to help get to know me better than a resume ever could.",
    key: 2,
  },
  {
    name: "Top 30 Github Repo Search",
    logo: `${ReactLogo}`,
    link: "https://github.com/bbright50/github-search2",
    desc: "A project given to me during my internship to dive deeper into APIs.",
    key: 3,
  },
  {
    name: "Beginner Scoreboard App",
    logo: `${JavaScriptLogo}`,
    link: "https://github.com/bbright50/scoreboard",
    desc: "One of my first projects I worked on to learn the basics of Javascript.",
    key: 4,
  },
  {
    name: "Mobile Friendly Shopping List",
    logo: `${JavaScriptLogo}`,
    link: "https://github.com/bbright50/add-to-cart",
    desc: "My first mobile friendly app to keep track of our groccery needs.",
    key: 5,
  },
  {
    name: "Asteroids Game",
    logo: `${PythonLogo}`,
    link: "https://github.com/bbright50/asteroids-game",
    desc: "A simple version of the popular video game written in Python.",
    key: 6,
  },
  {
    name: "Express Server",
    logo: `${ExpressJSLogo}`,
    link: "https://github.com/bbright50/graphql-server",
    desc: "A server I built to learn GraphQL better, and to have just in case.",
    key: 7,
  },
  {
    name: "Quick Go Server",
    logo: `${GoLangLogo}`,
    link: "https://github.com/bbright50/go-server",
    desc: "A server I built while learning Go.",
    key: 8,
  },
  {
    name: "Book Reader",
    logo: `${PythonLogo}`,
    link: "https://github.com/bbright50/bookbot",
    desc: "My first Python project that can take a book, read it and give some info on it.",
    key: 9,
  },
];

interface ChildProps {
  name: string;
  link: string;
  desc: string;
  logo: string;
  key: number;
}

const Portfolio: React.FC<ChildProps> = () => {
  return (
    <div className="bg-[url('./assets/white-w-yellow-bg.svg')] w-full text-center max-md:mt-8">
      <h1 className="text-center text-3xl mb-6">Portfolio</h1>
      <a
        href="https://www.successr.ai/"
        target="_blank"
        className="text-xl hover:text-red-500/80 underline"
      >
        Successr Home Page
      </a>
      <p className="text-lg my-2 mx-10">
        With very minimal oversight, I worked with a design contractor to help
        design and turn a figma file into this responsive site using React and
        TypeScript.
      </p>
      {/* <h1 className="m-16 text-3xl border-2 border-solid border-black rounded-2xl py-24">Will be deployed soon</h1> */}
      <iframe
        src="https://www.successr.ai/"
        title="Successr Home Page"
        className="aspect-video w-11/12 min-w-[320px] mx-auto mb-6"
      ></iframe>
      <h1 className="text-center text-2xl mb-8">My Repos</h1>
      <div className="flex flex-wrap justify-evenly gap-4 lg:gap-6">
        {repoArray.map(({ name, link, desc, logo, key }) => {
          return (
            <RepoCard
              key={key}
              link={link}
              name={name}
              desc={desc}
              logo={logo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
