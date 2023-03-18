import Link from "next/link";
import Image from "next/image";

import { data, instructorData } from "../../database/database";

const About = () => {
  return (
    <main>
      <section className=' container  bg-white round-b  '>
        <div className='md:flex-row flex-col-reverse mx-auto  max-w-screen-xl  px-8 pb-20 pt-40 flex '>
          <div className='flex-1'>
            <Link href={"/"}>
              <Image
                src={"/President.webp"}
                alt={"logo"}
                width={400}
                height={400}
              />
            </Link>
          </div>
          <div className='flex-1'>
            <h2>Dr. Arif Alvi</h2>
            <p>
              {" "}
              Dr. Arif Alvi was born in 1949 and completed his early education
              in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
              Montmorency College of Dentistry, Lahore where he was declared the
              “Best Graduate”. He completed his Masters of Science in the field
              of Prosthodontics from University of Michigan (1975) and in
              Orthodontics from University of Pacific, San Francisco (1982). He
              was awarded fellowship ‘Diplomatic American Board of Orthodontists
              (1995)’.
            </p>
            <p>
              {" "}
              President Dr. Arif Alvi has been a renowned professional and has
              held many important positions in the field of Dentistry. He
              remained Dean of Orthodontics, College of Physicians and Surgeons
              of Pakistan, President, Pakistan Dental Association (1997-2001),
              Pakistan Association of Orthodontists (2005), Asia Pacific Dental
              Federation (2006-07) and Councilor of the World Dental Federation
              (2007-2013). Through his sheer hard work in the World Dental
              Federation, he was able to get the declaration of 20th March as
              World Oral Health Day. He is also an author of a book, theses, and
              many articles.
            </p>
          </div>
        </div>
      </section>
      <section className='container py-10'>
        <h2 className='mx-auto'>Our Instructors</h2>
        <div className='flex max-w-screen-xl mx-auto py-10 items-center gap-3 '>
          {data.map((e) => (
            <div
              key={e.id}
              className='flex flex-1 flex-col text-center justify-center items-center '
            >
              <Image
                src={e.src}
                alt={""}
                width={40}
                height={40}
                className='rounded-full object-top object-cover'
              />
              <h3 className='inline'>{e.heading}</h3>
              <span className='text-sm'>{e.text}</span>
            </div>
          ))}
        </div>
      </section>
      <section className=' bg-black  round-t -mt-9 container p-0'>
        <div className=' flex-col-reverse mx-auto  max-w-screen-xl  py-20 md:flex-row flex justify-between items-center gap-10 '>
          <div className='flex-1'>
            <h2 className='text-white'>Zia Khan</h2>
            <p className='pt-8 p-8'>
              {" "}
              CEO of Panacloud, the world’s first Integrated API Ownership
              Economy, Crowdfunding, and Development Platform. Volunteer COO of
              PIAIC, an initiative by the President of Pakistan for AI and
              computing mass education. Mentor and software developer with 20+
              years of expertise in cloud and serverless computing, software
              design, project management, and API and App development. Expert in
              concept, business modeling & strategy development for startups,
              specializing in DeFi and token economics. Mentored and trained
              hundreds of thousands of developers. Triple masters degrees in
              business administration, engineering, and finance from Arizona
              State University. Master in Economics from KU. Certified Public
              Accountant and Certified Management Accountant in USA.
            </p>
            <p className='p-8'>
              {" "}
              Extensive experience in software architecture, design,
              development, implementation, and integration. Worked as a
              developer in Silicon Valley for 7 years. Hands-on work including
              thousands of hours of development work logged recently resulting
              in multiple successful projects for cutting edge startups like
              Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy,
              Cloudspot, OnSeen, Unicharts, etc.
            </p>
          </div>
          <div className='flex-1'>
            <Link href={"/"}>
              <Image
                src={"/Zia.webp"}
                alt={"logo"}
                width={400}
                height={400}
                className='object-top object-cover'
              />
            </Link>
          </div>
        </div>
      </section>
      <section className='container  bg-white round-t -mt-9'>
        <div className='md:flex-row flex-col-reverse mx-auto  max-w-screen-xl  px-8 py-20 flex'>
          <div className='flex-1'>
            <Link href={"/"}>
              <Image src={"/logo.png"} alt={"logo"} width={400} height={400} />
            </Link>
          </div>
          <div className='flex-1'>
            <h2 className='pb-5'>Panaverse DAO</h2>
            <p>
              {" "}
              Panaverse DAO is a community of Web 3 and Metaverse developers,
              designers, trainers, startup founders and service providers.
              Panaverse DAO is struggling to produce professional metaverse
              developers from Pakistan for the upcoming Era of Internet
            </p>
            <p>
              {" "}
              President Dr. Arif Alvi has been a renowned professional and has
              held many important positions in the field of Dentistry. He
              remained Dean of Orthodontics, College of Physicians and Surgeons
              of Pakistan, President, Pakistan Dental Association (1997-2001),
              Pakistan Association of Orthodontists (2005), Asia Pacific Dental
              Federation (2006-07) and Councilor of the World Dental Federation
              (2007-2013). Through his sheer hard work in the World Dental
              Federation, he was able to get the declaration of 20th March as
              World Oral Health Day. He is also an author of a book, theses, and
              many articles.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
