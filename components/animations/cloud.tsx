import IconCloud from "@/components/magicui/icon-cloud";
 
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
 
export function IconCloudComponet() {
  return (
    <div className="relative flex w-full h-full items-center justify-center overflow-hidden p-4 md:px-20 md:pb-20 md:pt-8 backdrop-blur-sm">
      <IconCloud iconSlugs={slugs}/>
    </div>
  );
}