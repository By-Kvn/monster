import Link from "next/link";
import Time from "./components/time";
import themesData from "./data/themesData";
import Monster from "./components/monster";
import Copyright from "./components/copyright";

export default function Home() {
  const theme = themesData[0];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-Roxborough relative">
      <div className="absolute left-6 top-6">
        <Time />
      </div>
      <div className="absolute right-40 top-6">
          <Copyright/>
      </div>
      <div className="w-full">
        <Monster />
      </div>
      <div className="fixed">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-10">
          {/* Titre principal */}
          <div className="relative">
            <p className="font-HelveticaNeue absolute top-8 left-5 text-normalText font-light">Just a</p>
            <h1 className="text-myPink font-Roxborough font-black text-[9.375rem] italic">
              {theme.theme}
            </h1>
            <p className="font-HelveticaNeue absolute right-52 bottom-2 text-normalText font-light">story</p>
          </div>
        </main>
      </div>
      {/* <Link href={"#"}>
        <p className="absolute -right-12 bottom-36 -rotate-90 font-HelveticaNeue text-sm font-light opacity-80">
          Monster- Copyrights
        </p>
      </Link> */}
    </div>
  );
}
