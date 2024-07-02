import { Menu, ArrowRight } from "react-feather";

export const Header = () => {
  return (
    <header className="text-2xl flex justify-between items-center p-8 max-w-screen-xl mx-auto">
      <Logo />
      <Navigation />
    </header>
  );
};

const Logo = () => {
  return (
    <div>
      <h1 class={"text-4xl font-thin"}>alexis<span class={"font-bold text-blue-500"}>conception.</span></h1>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav class={"flex gap-12"}>
      <div class={"hidden gap-2 items-center border-2 border-black transition duration-500 p-2 px-4 rounded-full cursor-pointer hover:bg-black hover:text-white sm:flex"}>
          Let's Talk <ArrowRight />
        </div>
        <div class={"p-4 px-4 rounded-full border-2 border-black flex items-center cursor-pointer hover:bg-black hover:text-white transition duration-500"}>
          <Menu />
        </div>
    </nav>
  );
};