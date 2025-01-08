import { readdirSync } from "fs";
import ShotImage from "./shot-image";
import { imageData } from "@/image-data";

export interface IGalleryPhoto {
    photo_url: string,
    alt: string,
}



const getImages = async () => {
    const files = readdirSync('./shots');
    return files
}

export default async function Shots() {
    const images = await getImages();
    const gallery: IGalleryPhoto[] = images.map((image) => ({
        photo_url: require(`../../shots/${image}`).default.src,
        alt: imageData[(image.split('.')[0]) as keyof typeof imageData]?.alt ?? "Shot of pixel 5" ,
  
    }));

    return (
        <div className="relative space-y-4">
            <div className="relative flex flex-wrap justify-center items-center">
                {gallery.map((image, i) => (
                    <div
                        key={i}
                        className={`relative ${i % 2 === 0 ? "w-1/3" : "w-1/4"
                            } mx-2 mb-6 hover:scale-105 transition-transform duration-500 overflow-hidden rounded-lg`}
                        style={{
                            zIndex: i % 3,
                            transform: `rotate(${(i % 3) * 3 - 3}deg)`,
                        }}
                    >
                        <ShotImage {...image} />
                        <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-black opacity-0 hover:opacity-100 flex flex-col justify-end p-4 text-white transition-opacity duration-300">
                            <p className="text-sm">{image.alt || "No subtitle available"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}