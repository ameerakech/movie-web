"use client"
import { ReactNode } from 'react';
interface ButtonProps{
   buttonText: ReactNode;variant:string;onClickHandler:()=>void;
}
const Button = ({buttonText, variant, onClickHandler}: ButtonProps
    ) =>{
const variantSwitch =(variant:string)=>{
    switch(variant){
        case"primary":
            return"bg-gray-800 text-green"
        case"secondary":
            return"bg-yellow-500 text-white ";
        default:
            return"border-2 border-yellow-500 text-white"
            }
        };
        const variantClass= variantSwitch(variant);
    return(
        <button className={`${variantClass} text-white text-sm w-30 h-10 rounded-xl cursor-pointer`}
        onClick={onClickHandler}>
{buttonText}
        </button>
    );
};
export default Button;