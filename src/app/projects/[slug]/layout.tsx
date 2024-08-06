"use client";

import { ProjectProvider } from "@/contexts";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProjectProvider>
      {children}
    </ProjectProvider>
  );
}
