"use client";
import { Link, NavLink } from "react-router-dom";
import { Drawer } from "vaul";
import { FaLinkedin } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaFileCode } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

export default function MenuHamburger() {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger asChild>
        <button>
          <FaHamburger className="text-xl mt-1" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full w-1/2 mt-24 fixed bottom-0 left-0">
          <div className="p-4 bg-white flex-1 h-full">
            <div className="flex flex-col max-w-md items-center">
              <Drawer.Title className="font-medium text-lg mb-4">
                Menu
              </Drawer.Title>
              <nav className="flex flex-col mt-8 gap-y-6">
                <Drawer.Close asChild>
                  <NavLink
                    to="/"
                    className={"hover:text-red-500/80 w-fit inline-flex"}
                  >
                    <FaHome className="hover:fill-red-500/80 mt-1 mr-1" />
                    Home
                  </NavLink>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <NavLink
                    to="/about-me"
                    className={"hover:text-red-500/80 w-fit inline-flex"}
                  >
                    <FaIdCard className="hover:fill-red-500/80 mt-1 mr-1" />
                    About Me
                  </NavLink>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <NavLink
                    to="/education"
                    className={"hover:text-red-500/80 w-fit inline-flex"}
                  >
                    <IoSchoolSharp className="hover:fill-red-500/80 mt-1 mr-1" />
                    Education
                  </NavLink>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <NavLink
                    to="/employment-history"
                    className={"hover:text-red-500/80 w-fit inline-flex"}
                  >
                    <MdWork className="hover:fill-red-500/80 mt-1 mr-1" />
                    Employment
                  </NavLink>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <NavLink
                    to="/coding"
                    className={"hover:text-red-500/80 w-fit inline-flex"}
                  >
                    <FaFileCode className="hover:fill-red-500/80 mt-1 mr-1" />
                    Portfolio
                  </NavLink>
                </Drawer.Close>
                <Link
                  to="https://www.linkedin.com/in/benjamin-bright-963622194/"
                  className={"hover:text-red-500/80 w-fit inline-flex"}
                >
                  <FaLinkedin className="hover:fill-red-500/80 mt-1 mr-1" />
                  LinkedIn
                </Link>
              </nav>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
