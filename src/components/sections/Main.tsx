import * as Feather from "react-feather";

import { useData } from "../../hooks/useData";

export const Main = () => {
  const { hero } = useData();

  return (
    <main class={"text-2xl flex gap-14 mx-auto flex-col leading-9 h-screen text-center lg:text-left"}>
      <div class={"flex align-center gap-8 justify-center lg:justify-between"}>
        <div>
          <h1 class={"name"}>{hero.title}</h1>
          <p class={"mt-4"} dangerouslySetInnerHTML={{ __html: hero.description }} />
          <div class={"flex gap-4 mt-6 justify-center lg:justify-start"}>
            {
              hero.icons.map((icon) => {
                // @ts-ignore
                let Icon = Feather[icon.icon]

                return <a
                  href={"https://github.com/AlxisHenry"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  class={
                    "text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  }
                >
                  <Icon size={38} />
                </a>
              })
            }
          </div>
        </div>
        <div class={"relative hidden lg:block"}>
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
