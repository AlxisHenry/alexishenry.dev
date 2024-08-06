import * as Feather from "react-feather";
import Image from "next/image";
import Link from "next/link";

import { useData } from "@/hooks";

export const Main = () => {
  const { hero } = useData();

  return (
    <main
      className={
        "text-2xl flex gap-14 mx-auto flex-col leading-9 h-screen text-center lg:text-left"
      }
    >
      <div
        className={"flex align-center gap-8 justify-center lg:justify-between"}
      >
        <div>
          <h1 className={"name"}>{hero.title}</h1>
          <p
            className={"mt-4"}
            dangerouslySetInnerHTML={{ __html: hero.description }}
          />
          <div className={"flex gap-4 mt-6 justify-center lg:justify-start"}>
            {hero.icons.map((icon) => {
              // @ts-ignore
              let Icon = Feather[icon.icon];

              return (
                <Link
                  key={icon.icon}
                  href={"https://github.com/AlxisHenry"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={
                    "text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  }
                >
                  <Icon size={38} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className={"relative hidden lg:block"}>
          <Image
            width={320} 
            height={320}
            src={
              "https://avatars.githubusercontent.com/u/91117127?s=400&u=d56546995d2f5c3f5f5775d1a223a9676ef2766f&v=4"
            }
            alt={"Random image"}
            className={
              "rounded-full size-80 min-w-80 absolute right-0 -top-16 border-4 border-blue-500"
            }
          />
        </div>
      </div>
    </main>
  );
};
