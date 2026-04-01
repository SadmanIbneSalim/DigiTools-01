import React from 'react';
import { Check } from "lucide-react";

const Card = ({feature}) => {
    return (
        <li className='flex gap-1 items-center text-[#627382]'><Check className='w-4' color="#09be15" strokeWidth={4} />{feature}</li>
    )
};

export default Card;