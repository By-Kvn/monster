import Image from "next/image";
import themesData from "../data/themesData";

export default function Home() {
    // Récupération des images du premier thème
    const monsterImages = themesData.find(theme => theme.theme === "Monster")?.images;

    return (
        <div className="grid grid-cols-12 gap-[5px] min-h-screen items-center justify-items-center font-Roxborough debug-grid relative">
            {/* Vérification si des images existent */}
            {monsterImages && (
                <>
                    {/* Image 1 */}
                    <div className="col-span-5 flex flex-col justify-end">
                        <Image
                            src={monsterImages[0].src}
                            alt={monsterImages[0].description}
                            width={507}
                            height={679}
                            className="animate-fade-in"
                        />
                        <div className=" flex flex-row justify-between mt-1">
                            <p>{monsterImages[0].title}</p>
                            <p>{monsterImages[0].description}</p>
                        </div>
                    </div>
                    {/* Image 2 */}
                    <div className="col-span-5 flex flex-col justify-start">
                        <Image
                            src={monsterImages[1].src}
                            alt={monsterImages[1].description}
                            width={507}
                            height={679}
                            className="animate-fade-in"
                        />
                        <div className=" flex flex-row justify-between mt-1">
                            <p>{monsterImages[1].title}</p>
                            <p>{monsterImages[1].description}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
