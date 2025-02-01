"use client";;
import { cn } from '@/components/fancy/cn.jsx';
import React from "react";
import { FeatureCarousel } from '@components/fancy/FeatureCarousel.tsx'
import { RainbowButton } from './RainbowButton.jsx'


interface CaseStudyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  category?: string;
  image?: string;
  logo?: string;
  link?: string;
  type?: "content" | "simple-image"; // Decides between text or image
}

// ContentCard Component for rendering text + image
const ContentCard: React.FC<CaseStudyCardProps> = ({ title, category, image, logo }) => {
  return (
    <div
      className="relative flex h-full flex-col items-start justify-between rounded-lg p-4"
      style={{
        // backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {image && <div className="opacity-70rounded-lg absolute inset-0 bg-black" />}

      <div className="relative z-10">
        {category && <div className="text-xs text-gray-200">{category}</div>}

        {title && (
          <div className="mr-2 text-lg font-bold leading-tight tracking-wide text-red-300">
            {title}
          </div>
        )}
      </div>
      {logo && ( // Check if image exists
        <img src={logo} alt={title} className="z-10 h-9 rounded-lg" />
      )}
    </div>
  );
};

// SimpleImageCard component for rendering only image
const SimpleImageCard: React.FC<CaseStudyCardProps> = ({ image }) => {
  return (
    <FeatureCarousel
      cardInsetBg="bg-CIAAN-body"
      cardBg="animated-cards-header-scas "

      cardBg="bg-animated-cards-description-tri    "
      title=<p className="text-gradient-display  font-['exo'] "> Trichord Digital LLC.</p>
      descriptionClassName="panel-white bg-panel-white backdrop-blur-[5px] flex flex-col  "
      description=<p className="text-gradient-display font-['exo']">Flightsim Keybind Mapping Automation</p>
      overview=<p className="text-tri-light font-['exo']">SCAS (Security Controls & Automation System) is a platform of cybersecurity tools initially tailored for T-Mobile Security Staff.<br></br>  Here, I designed SCAS's workflow for automating assessment & engagement creation & management.</p>
      insetCardBorderClassName="animated-cards-border-bg-tri"
      // Example classes for responsive layout
      step1img1Class={cn(
        "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
        " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
        "md:group-hover:translate-y-2"
      )}
      step1img2Class={cn(
        "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
        " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
        "md:group-hover:translate-y-2"
      )}
      step2img1Class={cn(
        "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
        " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
        "md:group-hover:translate-y-2"
      )}
      step2img2Class={cn(
        "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
        " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
        "md:group-hover:translate-y-2"
      )}
      step3imgClass={cn(
        "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
        " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[8%]",
        "md:group-hover:translate-y-2"
      )}
      step4imgClass={cn(
        "pointer-events-none w-[90%]  transition-all duration-500 dark:border-stone-700/50",
        " max-md:rounded-[24px] rounded-[10px] left-[25%] top-[57%] md:left-[2%] md:top-[7%]",
        "md:group-hover:translate-y-2"
      )}
      // Example images
      image={{
        step1light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp",
        step1light2: "https://d3e0o4zthiks52.cloudfront.net/ey_logo_white.svg",
        step2light1: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_2/create_engagement_step_2_1_5x.webp",
        step2light2: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
        step3light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_forms/screen_security_user_forms_1x.webp",
        step4light: "https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/screen_security_user_dashboard/screen_security_user_dashboard_2x.webp",
        alt: "Feature demonstration",
      }}
      // bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90 Card styling
      bgClass="bg-tri-body"
      button={
        // <button class="flex gap-[6px] w-fit whitespace-nowrap text-[#CEFCFF]  font-['exo_2'] uppercase h-[40px] p-button p-component" type="smooth" data-pc-name="button" data-pc-section="root"><p className='text-tri-light rounded-xl font-[550] text-[15px] self-center leading-none font-["exo_2"] rcs-scas-text uppercase '> READ CASE STUDY </p><svg height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2417_4739)"><g clip-path="url(#clip1_2417_4739)"><path d="M24 1.77178V23.1772C24 23.8907 23.4977 24.4745 22.8837 24.4745H8.34419C7.73023 24.4745 7.25581 23.8907 7.25581 23.1772V17.2421C7.25581 16.5285 7.75814 15.9448 8.37209 15.9448C8.98605 15.9448 9.48837 16.5285 9.48837 17.2421V21.8799H21.7674V3.06908H9.48837V7.70692C9.48837 8.42043 8.98605 9.00422 8.37209 9.00422C7.75814 9.00422 7.25581 8.42043 7.25581 7.70692V1.77178C7.25581 1.05827 7.73023 0.474487 8.34419 0.474487H22.8837C23.4977 0.474487 24 1.05827 24 1.77178ZM12.1395 16.6583C11.693 17.1772 11.7209 17.988 12.1395 18.5069C12.3628 18.7664 12.6419 18.8961 12.9209 18.8961C13.2 18.8961 13.507 18.7664 13.7023 18.5069L18.0837 13.3826C18.5023 12.8637 18.5023 12.0529 18.0837 11.5664L13.7302 6.37719C13.2837 5.85827 12.586 5.85827 12.1395 6.37719C11.693 6.89611 11.693 7.70692 12.1395 8.22584L14.6233 11.1448L1.11628 11.1772C0.502326 11.1772 0 11.761 0 12.4745C0 13.188 0.502326 13.7718 1.11628 13.7718L14.6233 13.7394L12.1395 16.6583Z" fill="#98FDDF"></path></g></g><defs><clipPath id="clip0_2417_4739"><rect width="24" height="24" fill="white" transform="translate(0 0.474487)"></rect></clipPath><clipPath id="clip1_2417_4739"><rect width="24" height="24" fill="white" transform="translate(0 0.474487)"></rect></clipPath></defs></svg></button>
        <RainbowButton type='tri'> <p className='rcs-tri-text leading-tight font-["EXO"] uppercase font-[550] text-[15px]'>Read Case Study</p> </RainbowButton>
      }
    />
  );
};

const HoverRevealSlip = ({ show }: { show: React.ReactNode }) => {
  const common = "absolute flex w-full h-full [backface-visibility:hidden]";

  return (
    <div className={cn("group relative h-60 w-full [perspective:120%]")}>
      {/* Back cover - static */}
      <div className={cn("absolute inset-0 h-full w-[48] rounded-lg bg-gray-50 shadow-md")}></div>

      {/* Card container with slight book opening effect on hover */}
      <div
        className={cn(
          "relative z-50 h-full w-full origin-left transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-30deg)]",
        )}
      >
        {/* Front side of the card */}
        <div className={cn("h-full w-full rounded-lg bg-white shadow-md", common)}>{show}</div>
      </div>

      {/* Sliding link/tab coming out from behind */}
      <div
        className={cn(
          "z-1 absolute bottom-0 right-0 flex h-48 w-14 -translate-x-10 transform items-start justify-start rounded-r-lg bg-green-600 pl-2 pt-2 text-xs font-bold text-white transition-transform duration-300 ease-in-out [backface-visibility:hidden] group-hover:translate-x-0 group-hover:rotate-[5deg]",
        )}
      >
        <div className="-rotate-90 whitespace-nowrap pb-16 pr-9">CLICK TO READ</div>
      </div>
    </div>
  );
};

// Main CaseStudyCard Component
export default function CaseStudyCard({
  title,
  category,
  link,
  image,
  logo,
  type,
}: CaseStudyCardProps) {
  return (
    <div className="flex w-full gap-8">
      <a href={link} className="block w-full flex">
        <HoverRevealSlip
          show={
            type === "content" ? (
              <ContentCard title={title} category={category} image={image} logo={logo} />
            ) : (
              <SimpleImageCard image={image} title={title} />
            )
          }
        />
      </a>
    </div>
  );
}
