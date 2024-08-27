import RepoCard from "@/components/RepoCard";

const repoArray = [
  {
    name: "Tour of Heroes",
    link: "https://github.com/bbright50/angular-tour-of-heroes",
    desc: "Worked through the Tour of Heroes tutorial to better learn Angular.",
    key: 0,
  },
  {
    name: "Book Reader",
    link: "https://github.com/bbright50/bookbot",
    desc: "My first Python project that can take a book, read it and give some info on it.",
    key: 1,
  },
  {
    name: "My Personal Website",
    link: "https://github.com/bbright50/personal-site",
    desc: "My personal website to help get to know me better than a resume ever could.",
    key: 2,
  },
  {
    name: "Top 30 Github Repo Search",
    link: "https://github.com/bbright50/github-search2",
    desc: "A project given to me during my internship to dive deeper into APIs.",
    key: 3,
  },
  {
    name: "Beginner Scoreboard App",
    link: "https://github.com/bbright50/scoreboard",
    desc: "One of my first projects I worked on to learn the basics of Javascript.",
    key: 4,
  },
  {
    name: "Mobile Friendly Shopping List",
    link: "https://github.com/bbright50/add-to-cart",
    desc: "My first mobile friendly app to keep track of our groccery needs.",
    key: 5,
  },
  {
    name: "Asteroids Game",
    link: "https://github.com/bbright50/asteroids-game",
    desc: "A simple version of the popular video game written in Python.",
    key: 6,
  },
];

interface ChildProps {
  name: string;
  link: string;
  desc: string;
  key: number;
}

const Portfolio: React.FC<ChildProps> = () => {
  return (
    <div className="bg-[url('./assets/white-w-yellow-bg.svg')] w-full text-center max-md:mt-8">
      <h1 className="text-center text-3xl mb-6">Portfolio</h1>
      <a
        href="https://preview.successr.ai/"
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
        src="https://preview.successr.ai/"
        title="Successr Home Page"
        className="aspect-video w-11/12 min-w-[320px] mx-auto mb-6"
      ></iframe>
      <h1 className="text-center text-2xl mb-8">My Repos</h1>
      <div className="flex flex-wrap justify-evenly gap-4 lg:gap-6">
        {repoArray.map(({ name, link, desc, key }) => {
          return <RepoCard key={key} link={link} name={name} desc={desc} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
