import { cn } from "@/lib/utils";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import React from "react";

const EducationAndExp = ({
  className,
  title,
  desc,
  date,
  isEducation
}: {
  className?: string;
  title: string;
  desc: string;
  date: string;
  isEducation?: boolean
}) => {
  return (
    <div className={cn(`md:border-l border-gray-500/20 space-y-3`, className)}>
      <div className="pl-12">
        {isEducation === true && <GraduationCap size={40} />}
        { isEducation === false && <BriefcaseBusiness size={40} />  }
      </div>
      <div className="flex items-center">
        <div className="h-3 w-3 rounded-full bg-gray-500/20 -ml-[6px] z-1"></div>
        <div className="h-[1px] w-10 bg-gray-500/20"></div>
        <div className="border border-gray-500/20 py-2 px-4 text-gray-500 hover:text-gray-100 transition-all hover:border-gray-100 font-popping-font ">
          {date}
        </div>
      </div>
      <div className="flex items-center">
        <div className="h-[1px] w-12 bg-gray-500/20"></div>
        <div className="pl-4 space-y-2 border-l border-gray-500/20">
          <h2 className="font-popping-font">{title}</h2>
          <p className="text-gray-500">@ {desc}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationAndExp;
