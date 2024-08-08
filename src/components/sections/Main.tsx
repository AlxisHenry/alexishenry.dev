import * as Feather from "react-feather";
import Image from "next/image";
import Link from "next/link";

import { useData } from "@/hooks";

export const Main = () => {
  const { hero } = useData();

  return (
    <main
      className={
        "text-2xl flex flex-col leading-9 text-center lg:text-left h-screen sm:h-auto sm:my-44 lg:my-64"
      }
    >
      <div
        className={"flex gap-8 justify-center items-center lg:items-start lg:justify-between flex-col-reverse lg:flex-row"}
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
                  href={icon.link}
                  target={icon.target}
                  rel={"noopener noreferrer"}
                  className={
                    "text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  }
                >
                  <Icon size={48} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className={"relative hidden sm:block"}>
          <Image
            width={320} 
            height={320}
            src={
              "https://avatars.githubusercontent.com/u/91117127?s=400&u=d56546995d2f5c3f5f5775d1a223a9676ef2766f&v=4"
            }
            alt={"Random image"}
            className={
              "rounded-full size-60 min-w-60 lg:size-80 lg:min-w-80 lg:absolute lg:mb-0 mb-12 right-0 -top-16 border-4 border-blue-500"
            }
          />
        </div>
      </div>
    </main>
  );
};
