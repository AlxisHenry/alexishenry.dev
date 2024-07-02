import { ArrowRight } from "react-feather";

export const Body = () => {
  return (
    <>
      <Main />

    </>
  );
};

const Main = () => {
  return (
    <main
      class={
        "text-2xl flex p-8 max-w-screen-xl gap-14 mx-auto flex-col leading-9 mt-16"
      }
    >
      <div>
        <span class={"font-semibold"}>Hello, I'm Alexis.</span>
        <h3 class={"mt-4 text-8xl font-bold"}>
          Designing digital
          <br />
          product with emphasis
          <br />
          <span class={"text-blue-500"}>on visual design</span>
        </h3>
      </div>
      <div>
        <div
          class={
            "flex gap-2 items-center border-2 bg-black text-white transition duration-500 p-4 px-8 rounded-full max-w-max hover:bg-white hover:text-black hover:border-black cursor-pointer"
          }
        >
          Let's Talk <ArrowRight />
        </div>
      </div>
    </main>
  );
};
