export type Data = {
  experiences: Experience[],
  stack: Stack,
  projects: Project[],
  about: any
}

export type Stack = {
  backend: string[],
  frontend: string[],
  tools: string[]
}

export type Experience = {
  id: number,
  name: string,
  company: string,
  location: string,
  duration: string,
  description: string
}

export type Project = {
  name: string,
  description: string,
  url: string
}
