export type Data = {
  navigation: {
    items: NavigationItem[];
  }
  hero: HeroSection;
  services: ServicesSection;
  projects: ProjectsSection;
  faq: FaqSection;
  workingTogether: WorkingTogetherSection;
  contact: ContactSection;
};

type NavigationItem = {
  link: string;
  name: string;
};

type Section = {
  title: string;
  description: string;
};

type HeroSection = Section & {
  cta: string;
  image: string;
  icons: HeroIcon[];
};

type HeroIcon = {
  icon: string;
  link: string;
  target: string;
};

type ContactSection = Section & {
  submitted: string;
  submitMessage: string;
  fields: ContactFormField[]
};

export type ContactFormField = {
  type: string;
  name: string;
  placeholder: string;
  inFirstRow?: boolean;
  options?: string[];
}

type WorkingTogetherSection = Section & {
  steps: WorkingTogetherStep[];
};

type WorkingTogetherStep = {
  title: string;
  description: string;
};

type ProjectsSection = Section & {
  empty: string;
  viewProject: string;
  items: Project[];
};

export type Project = {
  slug: string;
  thumbnail: string;
  stack: string[];
  title: string;
  description: string;
  links: {
    github?: string;
    preview?: string;
  }
};

type FaqSection = Section & {
  items: FrequentlyAskedQuestion[];
};

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
};

type ServicesSection = Section & {
  items: Service[];
};

type Service = {
  icon: string;
  title: string;
  description: string;
};
