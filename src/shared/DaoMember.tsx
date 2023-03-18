import React from "react";
import { AiFillHdd, AiOutlineUserAdd } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

const DaoMember = () => {
  return (
    <section className='container'>
      <div className='flex max-w-screen-xl  flex-col justify-center items-center '>
        <span className='text-span'> Panaverse </span>
        <h2>Decentralized Autonomous Organization</h2>
        <div className='flex flex-col md:flex-row justify-evenly container items-center  p-4 '>
          <div className='flex items-center  justify-between p-4 w-full md:w-3/12 bg-white border border-black rounded-t-md'>
            <div>
              <div className='flex flex-col justify-between  items-strech'>
                <h4 className=' md:text-xl font-semibold'>Members</h4>
                <span className=' font-semibold'>3,5000</span>
              </div>
            </div>
            <div>
              <AiOutlineUserAdd size={30} />
            </div>
          </div>
          <div className=' flex  justify-between items-center w-full p-4 md:w-3/12 bg-white border border-black rounded-t-md'>
            <div>
              <div className='flex flex-col justify-between items-center'>
                <h4 className='md:text-xl font-semibold'>Programs</h4>
                <span className=' font-semibold'>5+</span>
              </div>
            </div>
            <div>
              <AiFillHdd size={30} />
            </div>
          </div>
          <div className=' flex justify-between w-full md:w-3/12 items-center p-4 bg-white border border-black rounded-t-md'>
            <div>
              <div className='flex flex-col justify-between items-center '>
                <h4 className='md:text-xl font-semibold'>Cities</h4>
                <span className='text-left font-semibold'>4+</span>
              </div>
            </div>
            <div>
              <FiMapPin size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaoMember;
