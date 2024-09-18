import { type SocialLinksType, type LinksType, Project } from "./index.d";

export const links: Array<LinksType> = [
  { name: "About Me", url: "#about" },
  { name: "Projects", url: "#proejcts" },
  { name: "Resume", url: "#resume" },
  { name: "Contact", url: "#contact" },
];

export const socialMediaIcons: Array<SocialLinksType> = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/efrimpong",
  },
  { name: "GitHub", icon: "github", href: "https://www.github.com/Brocode17" },
  { name: "X", icon: "x", href: "https://x.com/brocode419" },
  {
    name: "theme",
    icon: "instagram",
    href: "https://instagram.com/brocode._17?igshid=NGVhN2U2NjQ0Yg==",
  },
];

export const projects: Project[] = [
      {
        title: "E-commerce Platform",
        description:
          "A full-featured enterprise e-commerce platform with user authentication, product management, and payment integration.",
        image: "/am.png",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "EJS", "Shadcn UI"],
        sourceUrl: "",
        liveUrl: "https://amoarte.online",
      },
      {
        title: "Emfip LLC Platform",
        description:
          "A enterprise e-commerce platform with admin dashboard, product management, analytics and order management, realtime order tracking system and payment integration.",
        image: "/emfip.png",
        techStack: ["React", "Node.js", "Appwrite", "Stripe", "Resend", "Typescript", "Shadcn UI"],
        sourceUrl: "",
        liveUrl: "https://emfiplaundry.com",
      },
      {
        title: "Nike",
        description:
          "A frontend case study project",
        image: "/nike.png",
        techStack: ["React", "TypeScript", "Shadcn UI"],
        sourceUrl: "https://github.com/BroCode17/nike-landing-page",
        liveUrl: "https://tailwindcssproj.com",
      },
      {
        title: "Bank Web App Tracker",
        description:
          "A user end bank transaction and spending tracker with realtime dashboard showing all the incoming and outgoing transaction, linking banking account and guide on spending",
        image: "/bank.png",
        techStack: ["React", "Node.js", "Nextjs", "Appwrite", "Plaid", "Sentry", "Shadcn UI"],
        sourceUrl: "https://github.com/BroCode17/bank",
        liveUrl: "https://bank-two-iota.vercel.app/",
      },
    ];