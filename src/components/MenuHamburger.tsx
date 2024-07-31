"use client";
import { Link, NavLink } from "react-router-dom";
import { Drawer } from "vaul";
import { FaBars } from "react-icons/fa";

export default function MenuHamburger() {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger asChild>
        <button>
          <FaBars />
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
                  <NavLink to="/" className={"hover:text-red-500/80 w-fit"}>Home</NavLink>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <NavLink to="/about-me" className={"hover:text-red-500/80 w-fit"}>About Me</NavLink>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <NavLink to="/education" className={"hover:text-red-500/80 w-fit"}>Education</NavLink>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <NavLink to="/employment-history" className={"hover:text-red-500/80 w-fit"}>Employment History</NavLink>
                </Drawer.Close>
                <Drawer.Close asChild>
                  <NavLink to="/coding" className={"hover:text-red-500/80 w-fit"}>Coding</NavLink>
                </Drawer.Close>
                <Link to="https://www.linkedin.com/in/benjamin-bright-963622194/" className={"hover:text-red-500/80 w-fit"}>
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
