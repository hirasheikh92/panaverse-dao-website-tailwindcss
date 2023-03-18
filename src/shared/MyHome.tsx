import Link from "next/link";
import React from "react";
import DaoMember from "./DaoMember";
import HomeCards from "./HomeCards";
import { MdDoubleArrow } from "react-icons/md";
import GoalMember from "./GoalMember";
import Testimonial from "./Testimonial";

const MyHome = () => {
  return (
    <>
      <main className='container '>
        <section className='h-[700px] flex justify-center items-center bg-white round-b  '>
          <div className=' flex flex-col items-center text-center justify-center '>
            <h1 className=' tracking-widest-2'>Become a Certified Developer</h1>
            <span className='text-span'> With Panaverse</span>
            <p className='md:w-[800px]  w-[600px]tracking-wider p-2'>
              A One and Quarter Years Panaverse DAO Earn as you Learn
              Program.Consolidating Web 3.0, Metaverse, Artificial Intelligence
              (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
            </p>
            <div className=' pt-5'>
              <Link href={"https://portal.piaic.org/signup"}>
                {" "}
                <button className='btn'>Apply</button>
              </Link>
            </div>
          </div>
        </section>

        <section className='p-12'>
          <DaoMember />
        </section>
        <section className=' bg-white  round-t container p-4'>
          <div className='flex flex-col'>
            <div className='p-8'>
              <h2 className=''>
                Courses
                <span className='mx-2 text-lg md:text-3xl text-span'>
                  Panaverse
                </span>
                Offers
              </h2>
            </div>
            <HomeCards />
          </div>
        </section>
        <section className=' bg-black  round-t -mt-9 container p-0'>
          <div className='flex flex-col p-20'>
            <div className='p-4'>
              <h2 className='mt-4 text-white'>
                Our<span className='mx-2 text-span'>Ultimate</span>Goal
              </h2>
            </div>

            <div className=' max-w-screen-xl mx-auto py-[50px] grid grid-cols-2 gap-6'>
              <div>
                <p className='p-3'>
                  The Mission of <span className='text-span'>Pnaverse</span> is
                  to reshape Pakistan by revolutionizing education, research,
                  and business by adopting latest, cutting-edge technologies.
                  Experts are calling this the 4th industrial revolution. We
                  want Pakistan to become a global hub for AI, data science,
                  cloud native computing, edge computing, blockchain, augmented
                  reality, and internet of things.
                </p>
                <ul className='p-3 flex flex-col'>
                  <li className='flex flex-start items-stretch'>
                    <MdDoubleArrow className=' text-[#D2001A]' size={30} />
                    <span className='text-[#505050] px-2 '>
                      Reshape Pakistan
                    </span>
                  </li>
                  <li className='flex flex-start items-stretch mb-3'>
                    <MdDoubleArrow className=' text-[#D2001A]' size={30} />
                    <span className='text-[#505050] px-2 '>Build Economy</span>
                  </li>
                  <li className='flex flex-start items-stretch'>
                    <MdDoubleArrow className=' text-[#D2001A]' size={30} />
                    <span className='text-[#505050] px-2 '>
                      Educate Youth about Current Situation
                    </span>
                  </li>
                </ul>
              </div>
              <GoalMember />
            </div>
          </div>
        </section>
        <Testimonial />
      </main>
    </>
  );
};

export default MyHome;
