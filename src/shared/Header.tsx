"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type Props = {};

const Header = (props: Props) => {
  const [toogle, setToggle] = useState(false);
  return (
    <header className=' max-w-screen-xl z-10 bg-white sm:max-xl:flex flex justify-between items-center px-5 py-3 fixed  w-full left-0 right-0 mt-10 top-0 rounded-full drop-shadow-2xl mx-auto '>
      <div>
        <Link href={"/"}>
          <Image src={"/logo.png"} alt={"logo"} width={100} height={100} />
        </Link>
      </div>

      <nav>
        <ul className='hidden md:flex justify-between space-x-5 items-center font-display text-black text-xl  tracking-wide cursor-pointer font-semibold '>
          <li className='link-hover'>
            <Link href={"/"}>Home</Link>
          </li>
          <li className='link-hover'>
            <Link href={"/about"}>About</Link>
          </li>
          <li className='link-hover'>
            <Link href={"/course"}>Course</Link>
          </li>
        </ul>
      </nav>

      <div className='hidden md:flex'>
        <Link href={"https://portal.piaic.org/signup"}>
          {" "}
          <button className='btn'>Apply</button>
        </Link>
      </div>
      {toogle ? (
        <AiOutlineClose
          onClick={() => setToggle(!toogle)}
          size={25}
          className='text-black text-2xl md:hidden block cursor-pointer'
        />
      ) : (
        <AiOutlineMenu
          onClick={() => setToggle(!toogle)}
          size={25}
          className='text-black text-2xl md:hidden block cursor-pointer'
        />
      )}
      {/* responsive menu */}
      <nav
        className={`md:hidden fixed bg-black text-white py-4 w-full h-screen top-[84px] ${
          toogle ? "left-[0]" : "left-[-100%]"
        }`}
      >
        <ul className=' flex flex-col space-y-7 font-display text-xl justify-center items-center tracking-wide cursor-pointer font-semibold '>
          <li className='link-hover '>
            <Link href={"/"}>Home</Link>
          </li>
          <li className='link-hover'>
            <Link href={"/"}>About</Link>
          </li>
          <li className='link-hover'>
            <Link href={"/"}>Course</Link>
          </li>
          <div className='md:hidden content-center'>
            <Link href={"https://portal.piaic.org/signup"}>
              {" "}
              <button className='btn'>Apply</button>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
