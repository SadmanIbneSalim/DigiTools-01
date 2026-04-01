import React from 'react';
import { Package } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { User } from 'lucide-react';

const Step = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className="max-w-300 mx-auto px-6 py-16">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold">Get Started in 3 Steps</h1>
                <p className="text-base-400 py-4">Start using premium digital tools in minutes, not hours.</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

              <div className="card bg-base-150 w-full shadow-lg">
                <figure className="px-10 pt-10">
                    <div className='bg-violet-100 p-5 rounded-full'>
                        <User size={92} color="#232afb" strokeWidth={1.5} />
                    </div>
                  
                </figure>
                
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Create Account</h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts

</p>
                </div>
              </div>

              <div className="card bg-base-100 w-full shadow-lg">
                <figure className="px-10 pt-10">

                    <div className='bg-violet-100 p-5 rounded-full'>
                  <Package size={92} color="#232afb" strokeWidth={1.5} />
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Choose Products</h2>
                  <p>Browse our catalog and select the tools that fit your needs.</p>
                </div>
              </div>

              <div className="card bg-base-100 w-full shadow-lg">
                <figure className="px-10 pt-10">
                    <div className='bg-violet-100 p-5 rounded-full'>
                  <Rocket size={92} color="#232afb" strokeWidth={1.5} />
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Start Creating</h2>
                  <p>Download and start using your premium tools immediately.</p>
                </div>
              </div>

            </div>
        </div>
        </div>
    );
};

export default Step;