 export type LinksType = {
  name: string;
  url: string
};
 export type SocialLinksType = {
  name: string;
  icon: string,
  href: string
};

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  sourceUrl: string;
  liveUrl: string;
}
