import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
type Props = {};

const Testimonial = (props: Props) => {
  return (
    <section className='bg-white round-t -mt-9 container p-0'>
      <div className='max-w-screen-xl px-8 py-20 mx-auto text-center '>
        <figure className='max-w-screen-md mx-auto '>
          <FaQuoteLeft size={40} className='mx-auto mb-4' />
          <blockquote>
            <p className='text-2xl font-medium text-gray-900'>
              As a student, I have found this course to be very good to my
              learning and professional development. One of the things I
              appreciate most about this course is the relevance of the material
              to my field of study. The course content is directly applicable to
              my career goals and has given me with a solid foundation of
              knowledge and skills. The difficulty of the course was challenging
              but not overwhelming, it has pushed me to learn new skills and
              think critically. The workload was well-balanced, and I felt that
              the assignments were challenging but achievable.The quality of
              instruction was excellent, the instructor was knowledgeable,
              engaging, and given clear explanations. The support team was quick
              to respond to any issues I had and given clear and concise
              instructions for resolving them.
            </p>
          </blockquote>
          <figcaption className='flex items-center justify-center mt-6 space-x-3'>
            <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
              <div className='pr-3 font-medium text-gray-900 text-black'>
                Abdullah Azhar Khan
              </div>
              <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                Student of Panaverse
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
