
'use client';

import { useState } from "react";
import Image from "next/image";
import { IGalleryPhoto } from "./shots";

export default function ShotImage({ photo_url, alt }: IGalleryPhoto) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={photo_url}
                alt={alt}
                width={300}
                blurDataURL={photo_url}
                height={300}
                unoptimized={true}
                className={`transition-transform ${
                    hovered ? "scale-110" : "scale-100"
                } object-cover`}
            />
        </div>
    );
}