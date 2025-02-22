import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import WorkflowIcon from '@components/generic/Icons/WorkflowIcon.jsx'

import { BentoCard, BentoGrid } from "@/components/fancy/Bento.jsx";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];
const CIAAN_Assess = [
  {
    Icon: <WorkflowIcon height='24px'/>,
    name: "Security Assessment Creation & Management Userflow",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5",
  },
  {
    Icon: InputIcon,
    name: "Security Engagement Creation & Management",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" src='https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_4/create_engagement_step_4_1x.webp'  />,
    className: "lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-2",
  },
  {
    Icon: InputIcon,
    name: "Security Engagement Creation & Management",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" src='https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessments_management/assessments_management_1x.webp'  />,
    className: "lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:row-end-3",
  },
];
const CIAAN_SecurityUser = [
  {
    Icon: <WorkflowIcon height='24px'/>,
    name: "Security User Dashboard",
    description: "Manage assigned security assessments and engagements.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/assessment_step_2/assessment_step_2_1_5x.webp" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5",
  },
  {
    Icon: InputIcon,
    name: "Assessment Forms",
    description: "Essentially Google Forms for Security Assessments",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" src='https://pub-e1fd8b0c7190484ebfff1f41eaef6dc2.r2.dev/create_engagement_step_4/create_engagement_step_4_1x.webp'  />,
    className: "lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-2",
  },

];
export function BentoPreviews({ bentoContent }) {
  const getContent = (bentoContent) => {


    switch (bentoContent) {
      case "CIAAN-Assess":
        return (CIAAN_Assess)
        break;

        case "CIAAN-SecurityUser":
          return (CIAAN_SecurityUser)

          break;
      default:
        return (CIAAN_SecurityUser)

        break;
    }
  }

  const content = getContent(bentoContent);

  return (
    <BentoGrid className="lg:grid-rows-3 h-full w-full">
      {/* {bentoContent}  */}
      {content.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
