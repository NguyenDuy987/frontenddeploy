import logo from "../../../public/asset/Logo-only.png";
import ApplicationLogo from "../ApplicationLogo";
import Dropdown from "../Dropdown";
import Link from "next/link";
import NavLink from "../NavLink";
import ResponsiveNavLink, { ResponsiveNavButton } from "../ResponsiveNavLink";
import { DropdownButton } from "../DropdownLink";
import { useAuth } from "../../../hooks/auth";
import { useRouter } from "next/router";
import { useState } from "react";

const Navigation = ({ user }) => {
  const router = useRouter();

  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 bg-white">
      {/* Primary Navigation Menu */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                {/* <ApplicationLogo className="block h-10 w-auto fill-current object-scale-down text-gray-600" /> */}
                <a>
                  <img src={logo.src} alt="" className="w-[50px]" />
                </a>
              </Link>
            </div>

            <h1 className="hidden space-x-8 text-xl font-extrabold sm:-my-px sm:ml-10 sm:flex">
              ietech
            </h1>
          </div>

          {/* Settings Dropdown */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Dropdown
              align="right"
              width="48"
              trigger={
                <button className="flex items-center text-sm font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none">
                  <div>{user?.name}</div>

                  <div className="ml-1">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              }
            >
              {/* Authentication */}
              <DropdownButton onClick={logout}>Đăng xuất</DropdownButton>
            </Dropdown>
          </div>

          {/* Hamburger */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setOpen((open) => !open)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Navigation Menu */}
      {open && (
        <div className="block sm:hidden">
          <h1 className="space-y-1 px-2 pt-2 pb-3">Bảng điều khiển</h1>

          {/* Responsive Settings Options */}
          <div className="border-t border-gray-200 pt-4 pb-1">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <svg
                  className="h-10 w-10 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {user?.name}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user?.email}
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              {/* Authentication */}
              <ResponsiveNavButton onClick={logout}>Logout</ResponsiveNavButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
