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
            <div className="relative flex flex-wrap justify-center grid grid-cols-3 items-center">
                {gallery.map((image, i) => (
                        <ShotImage {...image}  key={i}/>
                ))}
            </div>
        </div>
    );
}