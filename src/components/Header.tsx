
import { Link, NavLink } from "react-router-dom";
import MenuHamburger from "./MenuHamburger";
import { FaLinkedin } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";

export default function Header() {
    return (
        <header className="">
            <div className="md:hidden mt-6 grid grid-cols-6">
                <div className="my-auto col-start-2">
                    <MenuHamburger />
                </div>
                <h1 className="text-2xl xs:text-3xl col-span-4">Benjamin Bright</h1>
            </div>
            <div className="hidden md:flex justify-evenly xl:justify- mx-6 md:m-10">
                <h1 className="text-3xl lg:text-4xl ml-8 mr-8">Benjamin Bright</h1>
                <div className="mx-auto">
                    <nav className="grid max-xl:grid-cols-7 xl:grid-flow-col xl:auto-cols-max gap-y-2 gap-x-4 text-xl lg:text-2xl">
                        <NavLink
                            className={
                                "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white lg:px-3 lg:py-1 rounded-2xl inline-flex justify-self-start"
                            }
                            to="/about-me"
                        >
                            <FaIdCard className="hover:fill-red-500/80 mt-1 mr-1" />
                            About Me
                        </NavLink>
                        <NavLink
                            className={
                                "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-2 lg:px-3 lg:py-1 rounded-2xl inline-flex justify-self-start"
                            }
                            to="/education"
                        >
                            <IoSchoolSharp className="hover:fill-red-500/80 mt-1 mr-1" />
                            Education
                        </NavLink>
                        <NavLink
                            className={
                                "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-3 lg:px-3 lg:py-1 rounded-2xl inline-flex w-fit"
                            }
                            to="/employment-history"
                        >
                            <MdWork className="hover:fill-red-500/80 mt-1 mr-1" />
                            Employment
                        </NavLink>
                        <NavLink
                            className={
                                "col-span-2 self-center text-center col-start-2 border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-2 lg:px-3 lg:py-1 rounded-2xl inline-flex justify-self-start"
                            }
                            to="/coding"
                        >
                            <FaFileCode className="hover:fill-red-500/80 mt-1 mr-1" />
                            Portfolio
                        </NavLink>
                        <NavLink
                            className={
                                "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-2 lg:px-3 lg:py-1 rounded-2xl inline-flex justify-self-start"
                            }
                            to="/"
                        >
                            <FaHome className="hover:fill-red-500/80 mt-1 mr-1" />Home
                        </NavLink>
                        <Link
                            className={
                                "col-span-2 self-center text-center border-2 border-red-500/70 hover:bg-red-500/70 hover:text-white px-2 lg:px-3 lg:py-1 rounded-2xl inline-flex justify-self-start"
                            }
                            to="https://www.linkedin.com/in/benjamin-bright-963622194/"
                        >
                            <FaLinkedin className="hover:fill-red-500/80 mt-1 mr-1" />LinkedIn
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

// lg:grid-flow-col lg:auto-cols-max

{
    /* <nav className="flex grow justify-around text-xl lg:text-2xl items-center"></nav> */
}
