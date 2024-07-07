import { Logo } from "./Header.tsx";

export const Footer = () => {
  return (
    <footer class={"py-8 mb-4 mt-12"}>
      <div class={"container mx-auto flex align-center justify-center gap-12"}>
        <Logo />
      </div>
    </footer>
  );
};
