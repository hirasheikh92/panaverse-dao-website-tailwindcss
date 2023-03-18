import { cards, cardsData, core } from "@/database/database";
import { DiCode } from "react-icons/di";

const Course = ({
  id,
  heading1,
  heading2,
  text1,
  text2,
  heading3,
  text3,
}: cardsData) => {
  return (
    <main>
      <section className=' container  bg-white round-b  '>
        <div className=' max-w-screen-xl mx-auto px-8 py-40 '>
          <h2>Web3.0</h2>
          <p className='pt-10'>
            Certified Web 3.0 and Metaverse Developer. A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet.
          </p>
          <p>
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first two quarters are shared by
            all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a fifteen-month-long hybrid program that includes both
            onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </p>
        </div>
      </section>
      <section className='container py-10'>
        <h2 className='mx-auto '>Program Structure</h2>
        <div>
          <p className='mx-auto w-3/4 p-8'>
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet Consolidating
            Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
            Ambient Computing/IoT Technologies
          </p>
        </div>
      </section>
      <section className='container bg-black round-t  '>
        <div className=' w-2/4 mx-auto p-5 pt-10'>
          <h2 className=' text-white'>
            Core Courses
            <span className='text-span'> (Common in All Specializations)</span>
          </h2>
        </div>
        <div className=' mx-auto  max-w-screen-xl px-8 pt-10 pb-40 grid  grid-cols-3 gap-6'>
          {core.map((card) => (
            <div
              key={card.id}
              className='shadow-lg p-5 text-center rounded-md hover:bg-white  bg-[#F2F2F2] cursor-pointer hover:border2 border-slate-600 duration-100 '
            >
              <DiCode
                className='border-2 border-[#F2F2F2] mx-auto bg-[#f34f64] shadow-md transition duration-500 ease-in-out  '
                size={40}
              />
              <div className='p-4'>
                <span className='text-lg text-span text-center '>
                  {card.heading}
                </span>
                <p className='text-center text-sm md:text-[16px] pt-4'>
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className=' bg-white round-t -mt-9 container py-10'>
        {cards.map((cards) => (
          <div key={cards.id} className=''>
            <div className='w-2/4 mx-auto p-5 text-center '>
              <h2 className=''>{cards.heading1}</h2>
              <p>{cards.text1}</p>
            </div>
            <div className=' mx-auto  max-w-screen-xl px-8 pt-10 pb-20 grid grid-cols-2  gap-6'>
              <div className='shadow-lg p-5 text-center rounded-md hover:bg-white  bg-[#F2F2F2] cursor-pointer hover:border2 border-slate-600 duration-100 '>
                <DiCode
                  className='border-2 border-[#F2F2F2] mx-auto bg-[#f34f64] shadow-md transition duration-500 ease-in-out  '
                  size={40}
                />
                <div className='p-4'>
                  <span className='text-lg text-span text-center '>
                    {cards.heading2}
                  </span>
                  <p className='text-center text-sm md:text-[16px] pt-4'>
                    {cards.text2}
                  </p>
                </div>
              </div>

              <div className='shadow-lg p-5 text-center rounded-md hover:bg-white  bg-[#F2F2F2] cursor-pointer hover:border2 border-slate-600 duration-100 '>
                <DiCode
                  className='border-2 border-[#F2F2F2] mx-auto bg-[#f34f64] shadow-md transition duration-500 ease-in-out  '
                  size={40}
                />
                <div className='p-4'>
                  <span className='text-lg text-span text-center '>
                    {cards.heading3}
                  </span>
                  <p className='text-center text-sm md:text-[16px] pt-4'>
                    {cards.text3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Course;
