
import RepoCard from "@/components/RepoCard";

const repoArray = [
    {
        name: "My Website",
        link: "https://github.com/bbright50/resume",
        desc: "My personal website to help get to know me better than a resume ever could.",
        id: 0,
    },
    {
        name: "Top 30 Github Repo Search",
        link: "https://github.com/bbright50/github-search2",
        desc: "A project given to me during my internship to dive deeper into APIs.",
        id: 1,
    },
    {
        name: "Beginner Scorboard App",
        link: "https://github.com/bbright50/scoreboard",
        desc: "One of my first projects I worked on to learn the basics of Javascript.",
        id: 2,
    },
    {
        name: "Mobile Friendly Shopping List",
        link: "https://github.com/bbright50/add-to-cart",
        desc: "My first mobile friendly app to keep track of our groccery needs.",
        id: 3,
    },
];

interface ChildProps {
    name: string;
    link: string;
    desc: string;
    id: number;
}

const Coding: React.FC<ChildProps> = ({ id }) => {
    return (
        <div className="bg-[url('src/assets/white-w-yellow-bg.svg')] w-full text-center max-md:mt-8">
            <h1 className="text-center text-3xl mb-6">Coding Projects</h1>
            <a
                href="https://www.successr.ai"
                target="_blank"
                className="text-xl hover:text-red-500/80"
            >
                Successr Home Page
            </a>
            <iframe
                src="https://www.successr.ai"
                title="Successr Home Page"
                className="aspect-video w-11/12 min-w-[320px] mx-auto mb-6"
            ></iframe>
            <h1 className="text-center text-2xl mb-8">My Repos</h1>
            <div className="flex flex-wrap justify-evenly gap-4 lg:gap-6">
                {repoArray.map((repo) => {
                    return (
                        <RepoCard
                            key={id}
                            link={repo.link}
                            name={repo.name}
                            desc={repo.desc}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Coding;