import React from 'react';


const Skill = ({skill}) => {
    const {img,name,} = skill || {}
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className={`rounded-full w-28 p-4  ease-in duration-300`}>
                <img src={img} className=" mx-auto w-16 h-16 m-2" alt="" />
            </div>
            <h1 className='mt-0 text-center'>{name}</h1>
        </div>
    );
};

export default Skill;