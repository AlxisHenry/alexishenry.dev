export type Data = {
  services: Service[];
  frequentlyAskedQuestions: FrequentlyAskedQuestion[];
  projects: Project[];
  workingTogetherSteps: WorkingTogetherStep[];
  contactOptions: string[];
};

type WorkingTogetherStep = {
  title: string;
  description: string;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
};

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
};

type Service = {
  icon: string;
  title: string;
  description: string;
};
