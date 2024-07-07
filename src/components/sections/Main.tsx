import { GitHub, Linkedin } from "react-feather";

export const Main = () => {
  return (
    <main class={"text-2xl flex gap-14 mx-auto flex-col leading-9"}>
      <div class={"flex align-center gap-8 justify-between"}>
        <div>
          <h1 class={"name"}>Alexis HENRY</h1>
          <p class={"mt-4"}>
            Un développeur web & mobile{" "}
            <span class={"text-blue-500"}>passionné</span>.
          </p>
          <div class={"flex gap-4 mt-6"}>
            <a
              href={"https://github.com/AlxisHenry"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              class={
                "text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out"
              }
            >
              <GitHub size={38} />
            </a>
            <a
              href={"https://www.linkedin.com/in/alexishenry03/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              class={
                "text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out"
              }
            >
              <Linkedin size={38} />
            </a>
          </div>
        </div>
        <div class={"relative hidden md:block"}>
          <img
            src={
              "https://avatars.githubusercontent.com/u/91117127?s=400&u=d56546995d2f5c3f5f5775d1a223a9676ef2766f&v=4"
            }
            alt={"Random image"}
            class={
              "rounded-full size-80 min-w-80 absolute right-0 -top-16 border-4 border-blue-500"
            }
          />
        </div>
      </div>
    </main>
  );
};
