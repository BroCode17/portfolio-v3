import React, { useState } from "react";
import { BorderBeam } from "./magicui/border-beam";


const Spacer = ({className}: {className?:string}) => {
 const[showName, setShowName] = useState({
  
 })

 const [example, setExample] = useState(false);
 
  return (
    <div className="w-full flex h-24 max-md:hiddem">
      <div className="border-r border-r-gray-500/20 w-full relative overflow-hidden ">
     {/* <div className="size-full flex items-center justify-center hover:text-black bg-red-400 text-white">I</div> */}
      <BorderBeam size={20} duration={12} delay={9} colorFrom="#6b7280" borderWidth={1} colorTo="white"/>
      </div>
     
      <div className="border-r border-r-gray-500/20 w-full relative overflow-hidden">
      <BorderBeam size={20} duration={12} delay={15} colorFrom="white" borderWidth={1} colorTo="#6b7280"/>
      </div>
     
      <div className="border-r border-r-gray-500/20 w-full relative overflow-hidden">
      <BorderBeam size={20} duration={12} delay={5} colorFrom="#6b7280" borderWidth={1} colorTo="white" anchor={-90}/>
      </div>
     
      <div className="border-r border-r-gray-500/20 w-full relative overflow-hidden">
      <BorderBeam size={20} duration={12} delay={12} colorFrom="white" borderWidth={1} colorTo="#6b7280"/>
      </div>
     
      <div className=" w-full relative overflow-hidden">
      <BorderBeam size={20} duration={18} delay={3} colorFrom="#6b7280" borderWidth={1} colorTo="white" anchor={-90}/>
      </div>
     
    </div>
  );
};
const MobileSpacer = () => {
  return (
    <div className="w-full flex h-24 md:hidden">
      <div className="border-r border-r-gray-500/20 w-full"></div>
      <div className="border-r border-r-gray-500/20 w-full"></div>
      <div className=" w-full"></div>
    </div>
  );
};

export { MobileSpacer, Spacer };
