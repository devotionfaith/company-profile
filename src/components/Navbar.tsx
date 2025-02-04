"use client"
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full h-fit shadow-xl bg-white z-50">
      <div className="flex justify-between items-center w-full px-4 py-4 2xl:px-16">
        {/* Logo */}
        <div>
          <Link href="/" className="flex flex-row gap-3 items-center ml-4">
            <button>
              <Image
                src={logo}
                alt="Logo"
                width="45"
                height="45"
                className="cursor-pointer"
                priority
              />
            </button>
            <button>
              <div className="text-cont-primary ltr font-[ITC Avant Garde] ml-0 leading-[0.88882623] text-lg normal-case tracking-[-0.02em]">
                <span className="text-cont-primary font-bold text-lgg">
                  Cont
                </span>
                <span className="text-cont-primary font-normal text-lgg">
                  Solutions
                </span>
              </div>
            </button>
          </Link>
        </div>
        {/* Menu Links */}
        <div className="hidden lg:flex gap-10 text-lg text-cont-primary">
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/about"
          >
            About
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              className="font-bold hover:text-cont-secondary flex flex-row items-center transition-all"
              onClick={toggleDropdown}
            >
              Services
              <GoTriangleDown
                className={`ml-2 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full w-[300px] lg:w-[600px] rounded-lg bg-white p-6 border shadow-lg z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-bold flex justify-center text-cont-primary mb-1">
                      DEVELOPMENT
                    </h3>
                    <ul className="list-none space-y-2">
                      <li>
                        <Link
                          href="/services/it-manpower-sharing"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          IT Manpower Sharing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/product-development"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Product Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/website-development"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Website Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/application-development"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Application Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/mobile-app-development"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Mobile App Development
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-none mt-8 space-y-2">
                      <li>
                        <Link
                          href="/services/iot-development"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          IoT Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/data-analysis"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Data Analysis
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/network-installation"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Network Installation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/ai-development"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          AI Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/ui-ux-design"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          UI / UX Design
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mx-4 text-cont-primary mb-1">
                      CREATIVE
                    </h3>
                    <ul className="list-none space-y-2">
                      <li>
                        <Link
                          href="/services/logo-design"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Logo Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/social-media-management"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Social Media Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/photo-product"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Photo Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/video-ads-production"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                        >
                          Video Ads Production
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="font-bold hover:text-cont-secondary transition-all"
            href="/careers"
          >
            Careers
          </Link>
        </div>

        {/* Contact Us Button */}
        <div className="hidden lg:flex hover:scale-110 transition-all">
          <Link
            className="bg-cont-primary text-white px-6 py-3 rounded-lg font-bold xl:text-xl lg:text-lg md:text-base text-xs hover:bg-cont-secondary hover:transition-all duration-500 ease-in-out"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-10 h-10 fill-cont-primary stroke-cont-primary"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-l py-4 overflow-y-auto max-h-[calc(100vh-64px)]">
          <div className="flex flex-col gap-4 px-4">
            <Link
              className="text-cont-primary font-bold hover:text-cont-secondary transition-all"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-cont-primary font-bold hover:text-cont-secondary transition-all"
              href="/about"
            >
              About
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="text-cont-primary font-bold hover:text-cont-secondary transition-all flex items-center"
                onClick={toggleDropdown}
              >
                Services
                <GoTriangleDown
                  className={`ml-2 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="bg-white border rounded-lg mt-2 p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-bold flex justify-center text-cont-primary mb-1">
                        DEVELOPMENT
                      </h3>
                      <ul className="list-none space-y-2">
                        <li>
                          <Link
                            href="/services/it-manpower-sharing"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            IT Manpower Sharing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/product-development"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Product Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/website-development"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Website Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/application-development"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Application Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/mobile-app-development"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Mobile App Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/iot-development"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            IoT Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href=""
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Data Analysis
                          </Link>
                        </li>
                        <li>
                          <Link
                            href=""
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Network Installation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href=""
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            AI Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href=""
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            UI / UX Design
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mx-4 text-center text-cont-primary mb-1">
                        CREATIVE
                      </h3>
                      <ul className="list-none space-y-2">
                        <li>
                          <Link
                            href="/services/logo-design"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Logo Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/social-media-management"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Social Media Management
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/photo-product"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Photo Product
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/video-ads-production"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                          >
                            Video Ads Production
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              className="text-cont-primary font-bold hover:text-cont-secondary transition-all"
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="text-cont-primary font-bold hover:text-cont-secondary transition-all"
              href="/careers"
            >
              Careers
            </Link>
            <Link
              className="text-cont-primary font-bold hover:text-cont-secondary transition-all"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
