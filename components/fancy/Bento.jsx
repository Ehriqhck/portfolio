import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from '@/components/fancy/cn.jsx';
import { Button } from "@node_modules/primereact/button/button";
import WorkflowIcon from '@components/generic/Icons/WorkflowIcon.jsx'

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] h-fit  gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

function getIcon(IconName) {
  switch (IconName) {
    case 'workflow':
      return (

        <div className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" >
          <WorkflowIcon height='100%' />

        </div>
      )

      break;

    default:
      return <></>
      break;
  }
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={cn(
      "group relative  row-span-2  justify-between overflow-hidden rounded-xl pt-11",
      // light styles
      "bg-white  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      className,
    )}
  >
    <div className="pt-16">{background}</div>

    <div className=" portfolio-bento pointer-events-none z-10 flex pb-4 transform-gpu flex-row gap-1 px-6 pt-3 pb-1 transition-all duration-300 group-hover:-translate-y-10">
      {getIcon('workflow')}
      <div className=" ml-1 flex flex-col">
        <h3 className="text-xl font-semibold text-neutral-100 ">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-100">{description}</p>
      </div>

    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0  bg-white flex w-full translate-y-10 transform-gpu flex-row items-center px-4 pb-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href} className="flex flex-row place-content-center">
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] " />
  </div>
);

export { BentoCard, BentoGrid };