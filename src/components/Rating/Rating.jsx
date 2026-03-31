import React from 'react';

const Rating = () => {
    return (
        <div className='my-10 p-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='flex justify-between container max-w-300 mx-auto  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rp'>
            <div >
                <h2 className='text-5xl font-bold text-white'>50k+</h2>
                <p className='text-white' >Active Users</p>
            </div>
            
            <div>
                <h2 className='text-5xl font-bold text-white'>200+</h2>
                <p className='text-white' >Premium Tools</p>
            </div>
        
            <div>
                <h2 className='text-5xl font-bold text-white'>4.9</h2>
                <p className='text-white' >Rating</p>
            </div>
        </div>
        </div>
    );
};
  
export default Rating;