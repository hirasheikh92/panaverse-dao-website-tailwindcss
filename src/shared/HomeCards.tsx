import { cardData } from "@/database/cardData";
import React from "react";
import { DiCode } from "react-icons/di";

const HomeCards = ({}) => {
  return (
    <div className=' mx-auto  max-w-screen-xl px-8 pt-10 pb-20 grid lg:grid-cols-4 sm:grid-cols-2 gap-6'>
      {cardData.map((card) => (
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
  );
};

export default HomeCards;
