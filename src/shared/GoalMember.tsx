import { memberData } from "@/database/database";

const GoalMember = () => {
  return (
    <div className='grid grid-cols-2 gap-6'>
      {memberData.map((e) => (
        <div
          key={e.id}
          className='hidden md:flex flex-col items-center justify-center cursor-pointer border-2 border-[#D2001A] hover:bg-[#F2F2F2] duration-100 '
        >
          <span className=' text-span text-center'>{e.num}</span>
          <h3 className='text-[#505050] px-2 text-center'>{e.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default GoalMember;
