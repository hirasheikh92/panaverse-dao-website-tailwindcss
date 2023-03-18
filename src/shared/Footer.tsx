import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className=' bg-black  round-t -mt-9 container '>
      <div className='max-w-screen-xl mx-auto px-8 py-20 '>
        <div className='flex justify-between items-center'>
          <div className=''>
            <Link href={"/"}>
              <Image
                className='text-[#505050] '
                src={"/logo.png"}
                alt={"logo"}
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className='hidden md:flex'>
            <ul className='text-[#505050] text-center font-bold text-lg flex justify-between items-center'>
              <li className='link-hover mb-2 text-center'>
                <Link href={"/"}>Home</Link>
              </li>
              <li className='link-hover  mb-2 text-center'>
                <Link href={"/about"}>About</Link>
              </li>
              <li className='link-hover  mb-2 text-center'>
                <Link href={"/course"}>Course</Link>
              </li>
            </ul>
          </div>

          <div className=' hidden md:flex justify-between items-center gap-4  sm:mt-0 '>
            <div className='bg-[#505050] p-2 rounded-full  hover:bg-[#f34f64] transition-all ease-in'>
              {" "}
              <Link
                href='https://web.facebook.com/groups/panaverse?_rdc=1&_rdr'
                className='text-gray-500 hover:text-gray-900 '
              >
                <BsFacebook size={20} />
              </Link>
            </div>

            <div className='bg-[#505050] p-2  rounded-full cursor-pointer hover:bg-[#f34f64] transition-all ease-in'>
              <Link href='/' className='text-gray-500 hover:text-gray-900 '>
                <FiInstagram size={20} />
              </Link>
            </div>
            <div className='bg-[#505050] p-2  rounded-full cursor-pointer hover:bg-[#f34f64] transition-all ease-in'>
              <Link
                href='https://twitter.com/Panaverse_edu'
                className='text-gray-500 hover:text-gray-900 '
              >
                <BsTwitter size={20} />
              </Link>
            </div>
            <div className='bg-[#505050] p-2  rounded-full cursor-pointer hover:bg-[#f34f64] transition-all ease-in'>
              <Link
                href='https://github.com/panaverse'
                className='text-gray-500 hover:text-gray-900 '
              >
                <BsGithub size={20} />
              </Link>
            </div>

            <div className='bg-[#505050]  p-2 rounded-full cursor-pointer hover:bg-[#f34f64] transition-all ease-in'>
              <Link
                href='https://www.youtube.com/@panaverse'
                className='text-gray-500 hover:text-gray-900 '
              >
                <BsYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>
        <hr className='my-5 border-gray-200 sm:mx-auto dark:border-[#505050] lg:my-8' />
        <div className='text-center'>
          <span className='text-lg text-center text-[#505050] sm:text-center dark:text-[#505050]'>
            © 2023 <span className='text-span'> Hira Moueen™</span>. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
