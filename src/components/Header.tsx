
import { Link, NavLink } from "react-router-dom";
import MenuHamburger from "./MenuHamburger";

export default function Header() {
    return (
        <header className="">
            <div className="md:hidden mt-6 grid grid-cols-6">
                <div className="my-auto col-start-2">
                    <MenuHamburger />
                </div>
                <h1 className="text-2xl xs:text-3xl col-span-4">Benjamin Bright</h1>
            </div>
            <div className="hidden md:flex justify-evenly xl:justify-between m-6 lg:m-10 xl:mr-20 2xl:mr-32">
                <h1 className="text-3xl lg:text-4xl mr-2 flex-none">Benjamin Bright</h1>
                <nav className="grid max-xl:grid-cols-7 xl:grid-flow-col xl:auto-cols-max gap-y-2 gap-x-4 text-xl lg:text-2xl">
                    <NavLink
                        className={
                            "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white lg:px-3 lg:py-1 rounded-2xl"
                        }
                        to="/about-me"
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        className={
                            "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-2 lg:px-3 lg:py-1 rounded-2xl"
                        }
                        to="/education"
                    >
                        Education
                    </NavLink>
                    <NavLink
                        className={
                            "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-2 lg:px-3 lg:py-1 rounded-2xl"
                        }
                        to="/employment-history"
                    >
                        Employment
                    </NavLink>
                    <NavLink
                        className={
                            "col-span-2 self-center text-center col-start-2 border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-2 lg:px-3 lg:py-1 rounded-2xl"
                        }
                        to="/coding"
                    >
                        Coding
                    </NavLink>
                    <NavLink
                        className={
                            "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-2 lg:px-3 lg:py-1 rounded-2xl"
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <Link
                        className={
                            "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-2 lg:px-3 lg:py-1 rounded-2xl"
                        }
                        to="https://www.linkedin.com/in/benjamin-bright-963622194/"
                    >
                        LinkedIn
                    </Link>
                </nav>
            </div>
        </header>
    );
}

// lg:grid-flow-col lg:auto-cols-max

{
    /* <nav className="flex grow justify-around text-xl lg:text-2xl items-center"></nav> */
}
