import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from '@/components/fancy/cn.jsx';
import { Button } from "@node_modules/primereact/button/button";
import WorkflowIcon from '@components/generic/Icons/WorkflowIcon.jsx'

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};
 
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        " h-full row-span-1 rounded-xl bg-animated-cards-description-scas backdrop-blur-[10px]  group/bento hover:shadow-xl transition duration-200 shadow-input  p-4   justify-between flex flex-col space-y-4",
        className
      )}
    >
      {/* <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>    */}
         {header}

    </div>
  );
};